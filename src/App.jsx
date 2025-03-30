import React, { useEffect, useState } from "react";
import socket from "./socket";
import DataTable from "./components/DataTable";
import Notification from "./components/Notification";

const THRESHOLD = 1; // same as backend .env

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Listen for "newData" events from backend
    socket.on("newData", (incomingData) => {
      console.log("Received newData:", incomingData);
      setData(incomingData);
    });

    return () => {
      socket.off("newData");
    };
  }, []);

  // The most recent entry is data[0]
  const latestEntry = data[0] || {};
  const totalWeight = latestEntry.totalWeight || 0;

  return (
    <div>
      <h1>Real time data Monitoring & Alerts</h1>
      <Notification totalWeight={totalWeight} threshold={THRESHOLD} />
      <DataTable data={data} />
    </div>
  );
}

export default App;
