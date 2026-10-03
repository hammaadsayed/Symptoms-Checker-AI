import os
import time
from pathlib import Path

from dotenv import load_dotenv
from google import genai
from google.genai import types

from app.models.schemas import AnalysisResponse
from app.utils.prompt_builder import build_symptom_prompt


# =========================================================
# LOAD ENVIRONMENT VARIABLES
# =========================================================

BASE_DIR = Path(__file__).resolve().parents[2]
ENV_FILE = BASE_DIR / ".env"

load_dotenv(dotenv_path=ENV_FILE)

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

if not GEMINI_API_KEY:
    raise RuntimeError(
        f"GEMINI_API_KEY is missing. Expected file: {ENV_FILE}"
    )


# =========================================================
# GEMINI CLIENT
# =========================================================

client = genai.Client(api_key=GEMINI_API_KEY)


# =========================================================
# MODEL CONFIGURATION
# =========================================================

PRIMARY_MODEL = "gemini-3.8-flash"
FALLBACK_MODEL = "gemini-3.5-flash-lite"


# =========================================================
# GENERATE RESPONSE
# =========================================================

def generate_with_model(model_name, prompt):

    return client.models.generate_content(
        model=model_name,
        contents=prompt,
        config=types.GenerateContentConfig(
            response_mime_type="application/json",
            response_schema=AnalysisResponse,
        ),
    )


# =========================================================
# ANALYZE SYMPTOMS
# =========================================================

def analyze_symptoms(data) -> AnalysisResponse:

    prompt = build_symptom_prompt(data)

    # -----------------------------------------------------
    # Try primary model
    # -----------------------------------------------------

    for attempt in range(3):

        try:

            response = generate_with_model(
                PRIMARY_MODEL,
                prompt
            )

            if response.text:
                return AnalysisResponse.model_validate_json(
                    response.text
                )

        except Exception as error:

            error_text = str(error)

            print(
                f"Primary Gemini attempt {attempt + 1} failed:"
            )
            print(error_text)

            # Retry only transient server errors
            if "503" not in error_text and "UNAVAILABLE" not in error_text:
                break

            if attempt < 2:
                time.sleep(2 ** attempt)


    # -----------------------------------------------------
    # Fallback model
    # -----------------------------------------------------

    print(
        f"Trying fallback Gemini model: {FALLBACK_MODEL}"
    )

    try:

        response = generate_with_model(
            FALLBACK_MODEL,
            prompt
        )

        if not response.text:
            raise RuntimeError(
                "Gemini returned an empty response."
            )

        return AnalysisResponse.model_validate_json(
            response.text
        )

    except Exception as error:

        print("Fallback Gemini Error:", error)

        raise RuntimeError(
            "Gemini is temporarily unavailable. "
            "Please try again in a moment."
        )