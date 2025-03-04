import pandas as pd
import pickle
from sklearn.metrics.pairwise import cosine_similarity

# Load data
df = pd.read_csv("data/movies_cleaned.csv")

# Load trained model
with open("models/model.pkl", "rb") as file:
    model = pickle.load(file)

def get_recommendations(movie_title):
    if movie_title not in df["title"].values:
        return {"error": "Movie not found"}
    
    idx = df[df["title"] == movie_title].index[0]
    similarity_scores = cosine_similarity(model[idx].reshape(1, -1), model).flatten()
    recommended_indices = similarity_scores.argsort()[-6:-1][::-1]
    
    recommendations = df.iloc[recommended_indices][["movieId", "title", "genres"]].to_dict(orient="records")
    return {"recommendations": recommendations}
