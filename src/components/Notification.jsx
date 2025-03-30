import React from "react";

const Notification = ({ totalWeight, threshold }) => {
  if (totalWeight < threshold) {
    return (
      <div style={{ backgroundColor: "red", color: "#fff", padding: "10px", marginBottom: "10px" }}>
        <strong>🚨 Low Weight Alert!</strong> Current Total Weight: {totalWeight.toFixed(2)} kg
      </div>
    );
  }
  return null;
};

export default Notification;
