import pickle
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB

texts = [
    "pothole on main road",
    "street light not working",
    "water leakage in hostel",
    "garbage not collected",
    "wifi not working in lab",
    "noise near library"
]

categories = [
    "Infrastructure",
    "Infrastructure",
    "Water",
    "Sanitation",
    "Network",
    "Discipline"
]

vectorizer = CountVectorizer()
X = vectorizer.fit_transform(texts)

model = MultinomialNB()
model.fit(X, categories)

with open("ml/model.pkl", "wb") as f:
    pickle.dump(model, f)

with open("ml/vectorizer.pkl", "wb") as f:
    pickle.dump(vectorizer, f)

print("Model trained successfully")
