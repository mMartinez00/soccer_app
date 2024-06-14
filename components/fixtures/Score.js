import React from "react";

export default function Score({ score }) {
  return (
    <div className="Match_Score">
      <span className="Home_score">{score.halftime.home}</span> {"-"}{" "}
      <span className="Away_score">{score.halftime.away}</span>
    </div>
  );
}
