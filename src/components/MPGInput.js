import React from "react";

const MPGInput = ({ mpg, setMPG }) => {
  return (
    <div>
      <label htmlFor="mpg">MPG:</label>
      <input
        type="number"
        id="mpg"
        value={mpg}
        onChange={e => setMPG(e.target.value)}
      />
    </div>
  );
}

export default MPGInput;