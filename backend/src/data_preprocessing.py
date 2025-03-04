import pandas as pd

df = pd.read_csv(r"C:\Users\HP\Ganapathi\recommendation_system\backend\data\movies.csv")

df["genres"] = df["genres"].fillna("")
df.to_csv(r"C:\Users\HP\Ganapathi\recommendation_system\backend\data\movies_cleaned.csv", index=False)

print("✅ Data Preprocessing Complete!")
