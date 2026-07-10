from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5174"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

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