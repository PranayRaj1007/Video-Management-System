import torch
import os
import cv2

def run_yolo_detection(input_folder, output_folder):
    model = torch.hub.load("ultralytics/yolov5", "yolov5s", pretrained=True)
    os.makedirs(output_folder, exist_ok=True)
    results_summary = []

    for file in os.listdir(input_folder):
        filepath = os.path.join(input_folder, file)
        if filepath.endswith((".jpg", ".png", ".jpeg", ".mp4")):
            results = model(filepath)
            labels = results.pandas().xyxy[0]["name"].tolist()
            confs = results.pandas().xyxy[0]["confidence"].tolist()

            out_path = os.path.join(output_folder, file)
            results.save(save_dir=output_folder)
            
            results_summary.append({
                "file": file,
                "detections": labels,
                "confidences": confs
            })

    return results_summary
