import pandas as pd
import pickle
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# Load preprocessed data
df = pd.read_csv(r"C:\Users\HP\Ganapathi\recommendation_system\backend\data\movies.csv")

# Ensure genres column is treated as text
df["genres"] = df["genres"].fillna("")

# TF-IDF Vectorization (Using only genres)
tfidf = TfidfVectorizer(stop_words="english")
tfidf_matrix = tfidf.fit_transform(df["genres"])

# Compute cosine similarity matrix
cosine_sim = cosine_similarity(tfidf_matrix, tfidf_matrix)

# Save trained model and vectorizer
with open("models/model.pkl", "wb") as file:
    pickle.dump(cosine_sim, file)

with open("models/tfidf_vectorizer.pkl", "wb") as file:
    pickle.dump(tfidf, file)

# Save movie index for later use
df[["movieId", "title"]].to_csv("models/movie_index.csv", index=False)

print("✅ Model Training Complete! Model saved in 'models/'")
