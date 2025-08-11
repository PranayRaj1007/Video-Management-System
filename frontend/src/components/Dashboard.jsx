import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/run_yolo")
      .then(res => setResults(res.data.results))
      .catch(err => console.error("API error:", err));
  }, []);

  return (
    <div>
      {results.map((r, index) => (
        <div key={index} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <h4>{r.file}</h4>
          <p>Detections: {r.detections.join(", ")}</p>
          <p>Confidences: {r.confidences.map(c => c.toFixed(2)).join(", ")}</p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
