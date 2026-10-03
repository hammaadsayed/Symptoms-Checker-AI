from typing import List
from pydantic import BaseModel, Field


class SymptomInput(BaseModel):
    id: str | int
    name: str
    category: str


class AnalysisRequest(BaseModel):
    age: int = Field(ge=1, le=120)
    gender: str
    symptoms: List[SymptomInput]
    duration: str
    severity: str
    additionalInfo: str = ""


class PossibleExplanation(BaseModel):
    name: str
    explanation: str


class AnalysisResponse(BaseModel):
    summary: str
    possible_explanations: List[PossibleExplanation]
    general_guidance: List[str]
    warning_signs: List[str]
    when_to_seek_care: str
    disclaimer: str