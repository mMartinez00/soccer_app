import React from "react";

export default function Time({ time }) {
  return (
    <div className="time">
      <span>
        {time.long} {time.elapsed}
        {"'"}
      </span>
    </div>
  );
}
