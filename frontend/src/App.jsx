import React from "react";

const App = () => {
  return (
    <div className="container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>VMS Dashboard</h2>
        <ul>
          <li>Live Feeds</li>
          <li>Alerts</li>
          <li>Settings</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main">
        <header>
          <h1>Live Camera Feeds</h1>
        </header>
        <div className="video-grid">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div className="video-card" key={n}>
              <video
                src={`http://localhost:8000/video_feed/cam${n}`}
                controls
              />
              <p>Camera {n}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
