import React from "react";
import ReactSpeedometer from "react-d3-speedometer";

const WeightGauge = ({ totalWeight }) => {
  return (
    <div className="gauge-container">
      <h2>Total Weight</h2>
      <ReactSpeedometer
        maxValue={8} // Max weight (5kg + 3kg)
        value={totalWeight} // Dynamically updates
        needleColor="red"
        startColor="green"
        segments={5}
        endColor="red"
        height={200}
        width={300}
        textColor="black"
      />
    </div>
  );
};

export default WeightGauge;
