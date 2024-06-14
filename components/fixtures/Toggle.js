import React from "react";

export default function Toggle({ handleClick }) {
  return (
    <div>
      <button onClick={handleClick}>Live</button>
    </div>
  );
}
