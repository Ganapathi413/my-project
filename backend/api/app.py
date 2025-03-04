from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api.recommend import get_recommendations

app = FastAPI()

# CORS settings
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "Welcome to the Recommendation System API"}

@app.get("/recommend/{movie}")
def recommend(movie: str):
    return get_recommendations(movie)
