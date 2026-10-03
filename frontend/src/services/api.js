const API_BASE_URL =
  import.meta.env.VITE_API_URL ||
  "https://symptoms-checker-ai-backend.onrender.com";

export async function analyzeSymptoms(data) {
  const url = `${API_BASE_URL}/api/analyze`;

  console.log("Calling API:", url);
  console.log("Sending data:", data);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });

    console.log("API Status:", response.status);

    const contentType = response.headers.get("content-type");

    let result;

    if (contentType && contentType.includes("application/json")) {
      result = await response.json();
    } else {
      const text = await response.text();
      result = {
        detail: text || "Backend returned an empty response.",
      };
    }

    if (!response.ok) {
      throw new Error(
        result?.detail ||
        result?.message ||
        `Backend error: ${response.status}`
      );
    }

    return result;
  } catch (error) {
    console.error("AI Analysis Error:", error);

    if (error instanceof TypeError) {
      throw new Error(
        "Unable to connect to the AI server. Please check the backend deployment."
      );
    }

    throw error;
  }
}