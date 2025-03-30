import React, { useState, useEffect } from "react";
import socket from "../socket"; // Import socket instance
import WeightGauge from "./WeightGauge";
import "./DataTable.css"; // Import CSS

const DataTable = ({ data }) => {
  const [latestWeight, setLatestWeight] = useState(0);
  const [tableData, setTableData] = useState(data);

  useEffect(() => {
    // Listen for real-time data updates
    socket.on("newData", (newData) => {
      setTableData(newData);
      if (newData.length > 0) {
        setLatestWeight(newData[0].totalWeight); // Latest data is at index 0
      }
    });

    return () => {
      socket.off("newData"); // Cleanup on unmount
    };
  }, []);

  return (
    <div className="data-container">
  <WeightGauge totalWeight={latestWeight} />
  <div className="table-wrapper">
    <table className="data-table">
      <thead>
        <tr>
          <th>Timestamp</th>
          <th>RFID</th>
          <th>Weight1 (kg)</th>
          <th>Weight2 (kg)</th>
          <th>Total Weight (kg)</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((item, idx) => (
          <tr key={idx}>
            <td>{item.timestamp}</td>
            <td>{item.rfid}</td>
            <td>{item.weight1.toFixed(2)}</td>
            <td>{item.weight2.toFixed(2)}</td>
            <td><strong>{item.totalWeight.toFixed(2)}</strong></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

  );
};

export default DataTable;
