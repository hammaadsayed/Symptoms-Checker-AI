from fastapi import APIRouter, HTTPException

from app.models.schemas import AnalysisRequest, AnalysisResponse
from app.services.gemini_service import analyze_symptoms


router = APIRouter(
    prefix="/api",
    tags=["Analysis"]
)


@router.post(
    "/analyze",
    response_model=AnalysisResponse
)
def analyze(request: AnalysisRequest):
    try:
        result = analyze_symptoms(request)
        return result

    except Exception as error:
        print("Gemini Error:", error)

        raise HTTPException(
            status_code=500,
            detail="Unable to generate AI analysis at the moment."
        )