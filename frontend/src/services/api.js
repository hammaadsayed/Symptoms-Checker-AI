const API_BASE_URL =
  import.meta.env.VITE_API_URL ||
  "https://symptoms-checker-ai-backend.onrender.com";

export async function analyzeSymptoms(data) {
  const url = `${API_BASE_URL}/api/analyze`;

  console.log("API URL:", url);
  console.log("DATA:", data);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    console.log("Backend status:", response.status);

    const result = await response.json();

    console.log("Backend response:", result);

    if (!response.ok) {
      throw new Error(
        result?.detail || `Backend error: ${response.status}`
      );
    }

    return result;
  } catch (error) {
    console.error("AI Analysis Error:", error);
    throw error;
  }
}