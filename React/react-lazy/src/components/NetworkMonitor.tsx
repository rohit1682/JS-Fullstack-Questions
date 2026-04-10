import React, { useState, useEffect } from "react";

interface ChunkLoadInfo {
  id: number;
  name: string;
  size: string;
  time: string;
  timestamp: number;
}

const NetworkMonitor: React.FC = () => {
  const [loadedChunks, setLoadedChunks] = useState<ChunkLoadInfo[]>([]);

  useEffect(() => {
    // Mock data for visualization purposes
    const initialChunks = [
      {
        id: 1,
        name: "main.js",
        size: "56.2 KB",
        time: "0.0s",
        timestamp: Date.now(),
      },
    ];

    setLoadedChunks(initialChunks);

    // Function to simulate chunk loading
    const simulateChunkLoad = (name: string, size: string, delay: number) => {
      setTimeout(() => {
        setLoadedChunks((prevChunks) => [
          ...prevChunks,
          {
            id: prevChunks.length + 2,
            name,
            size,
            time: `+${delay / 1000}s`,
            timestamp: Date.now(),
          },
        ]);
      }, delay);
    };

    // Clear any existing timers when component unmounts
    return () => {
      // Any cleanup if needed
    };
  }, []);

  // Add a new chunk when a tab is clicked (simulated)
  const addChunkForTab = (tabName: string) => {
    const newChunk = {
      id: loadedChunks.length + 2,
      name: `${tabName.toLowerCase()}.chunk.js`,
      size: `${Math.floor(Math.random() * 30) + 10}.${Math.floor(
        Math.random() * 9
      )}KB`,
      time: "just now",
      timestamp: Date.now(),
    };

    setLoadedChunks([...loadedChunks, newChunk]);
  };

  return (
    <div className="network-monitor">
      <h3>Network Activity Monitor</h3>
      <p className="monitor-note">
        This is a simulation to visualize how chunks load on demand
      </p>

      <div className="chunk-list">
        <div className="chunk-header">
          <span className="chunk-name">Chunk Name</span>
          <span className="chunk-size">Size</span>
          <span className="chunk-time">Time</span>
        </div>

        {loadedChunks.map((chunk) => (
          <div className="chunk-item" key={chunk.id}>
            <span className="chunk-name">{chunk.name}</span>
            <span className="chunk-size">{chunk.size}</span>
            <span className="chunk-time">{chunk.time}</span>
          </div>
        ))}
      </div>

      <div className="demo-buttons">
        <button onClick={() => addChunkForTab("Dashboard")}>
          Simulate Dashboard Load
        </button>
        <button onClick={() => addChunkForTab("Profile")}>
          Simulate Profile Load
        </button>
        <button onClick={() => addChunkForTab("Settings")}>
          Simulate Settings Load
        </button>
      </div>
    </div>
  );
};

export default NetworkMonitor;
