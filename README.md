# Video-Management-System
## Overview
vms-project is a full-stack application that utilizes a YOLO (You Only Look Once) model for object detection in videos and images. The project is structured into two main parts: the backend and the frontend.

## Project Structure
```
vms-project
├── backend
│   ├── app
│   │   └── main.py
│   ├── models
│   │   └── yolo_model.py
│   ├── utils
│   │   └── video_handler.py
│   ├── static
│   │   ├── inputs
│   │   └── outputs
│   └── requirements.txt
├── frontend
│   ├── public
│   ├── src
│   │   ├── App.jsx
│   │   └── components
│   │       └── Dashboard.jsx
│   └── package.json
└── README.md
```

## Backend
The backend is responsible for processing video and image inputs, running the YOLO model, and returning the results. 

### Setup
1. Navigate to the `backend` directory.
2. Install the required dependencies:
   ```
   pip install -r requirements.txt
   ```
3. Run the application:
   ```
   python app/main.py
   ```

### Directory Details
- **app/main.py**: Main entry point for the backend application.
- **models/yolo_model.py**: Implementation of the YOLO model.
- **utils/video_handler.py**: Utility functions for handling video input and output.
- **static/inputs**: Drop images/videos here for processing.
- **static/outputs**: YOLO results will be saved here.

## Frontend
The frontend is built using React and provides a user interface for interacting with the backend.

### Setup
1. Navigate to the `frontend` directory.
2. Install the required dependencies:
   ```
   npm install
   ```
3. Start the frontend application:
   ```
   npm start
   ```

### Directory Details
- **public/**: Contains static assets and the HTML file.
- **src/App.jsx**: Main component of the frontend application.
- **src/components/Dashboard.jsx**: Renders the dashboard view.

## Usage
After setting up both the backend and frontend, you can upload images or videos to the `static/inputs` directory. The processed results will be available in the `static/outputs` directory.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License.
