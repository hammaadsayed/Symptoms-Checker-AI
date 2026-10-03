from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes.analysis import router as analysis_router


app = FastAPI(
    title="Symptoms Checker AI API",
    description="Backend API for AI-assisted symptom information.",
    version="1.0.0"
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "https://symptoms-checker-ai-d86s.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(analysis_router)


@app.get("/")
def root():
    return {
        "message": "Symptoms Checker AI Backend is running"
    }


@app.get("/health")
def health():
    return {
        "status": "healthy"
    }