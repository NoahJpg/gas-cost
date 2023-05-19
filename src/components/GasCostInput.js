import React from "react";

const GasCostInput = ({ gasCost, setGasCost }) => {
  return (
    <div>
      <label htmlFor="gas-cost">Average Gas Cost:</label>
      <input
        type="number"
        id="gas-cost"
        value={gasCost}
        onChange={e => setGasCost(e.target.value)}
      />
    </div>
  )
}

export default GasCostInput