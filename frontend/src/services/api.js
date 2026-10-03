const API_BASE_URL = "http://localhost:8000";

export async function analyzeSymptoms(data) {
  console.log("=================================");
  console.log("SENDING REQUEST TO BACKEND");
  console.log("=================================");
  console.log("URL:", `${API_BASE_URL}/api/analyze`);
  console.log("DATA:", data);

  const response = await fetch(
    `${API_BASE_URL}/api/analyze`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  console.log("Backend status:", response.status);

  const result = await response.json();

  console.log("Backend response:", result);

  if (!response.ok) {
    throw new Error(
      result?.detail ||
      "Backend analysis failed."
    );
  }

  return result;
}