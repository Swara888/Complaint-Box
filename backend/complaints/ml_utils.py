import pickle
import os
from django.conf import settings

model_path = os.path.join(settings.BASE_DIR, "ml", "model.pkl")
vectorizer_path = os.path.join(settings.BASE_DIR, "ml", "vectorizer.pkl")

with open(model_path, "rb") as f:
    model = pickle.load(f)

with open(vectorizer_path, "rb") as f:
    vectorizer = pickle.load(f)

def predict_category(text):
    X = vectorizer.transform([text])
    return model.predict(X)[0]
