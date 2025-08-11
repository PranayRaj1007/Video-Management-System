from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from models.yolo_model import run_yolo_detection
import os

app = FastAPI()
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"])

@app.get("/run_yolo")
def run_yolo():
    input_folder = "static/inputs"
    output_folder = "static/outputs"
    results = run_yolo_detection(input_folder, output_folder)
    return {"results": results}
