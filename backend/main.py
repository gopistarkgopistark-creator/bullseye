from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class URLRequest(BaseModel):
    url: str

@app.get("/")
def home():
    return {"message": "Bullseye API Running 🚀"}

@app.get("/status")
def status():
    return {
        "project": "Bullseye",
        "status": "Running",
        "version": "v1"
    }

@app.post("/scan")
def scan_url(request: URLRequest):
    url = request.url.lower()

    suspicious_keywords = [
        "free",
        "login",
        "verify",
        "bank",
        "gift",
        "win"
    ]

    if any(keyword in url for keyword in suspicious_keywords):
        return {
            "status": "Suspicious"
        }

    return {
        "status": "Safe"
    }