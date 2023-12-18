import React from "react";
import LeagueHeader from "./LeagueHeader";
import Match from "./Match";
import styles from "../styles/Competition.module.css";

export default function Competition({ league, matches }) {
  return (
    <div className={styles.Competition}>
      <LeagueHeader league={league} />
      <Match matches={matches} />
    </div>
  );
}
