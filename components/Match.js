import React from "react";
import Team from "./Team";
import Score from "./Score";
import Time from "./Time";
import styles from "../styles/Match.module.css";

export default function Match({ matches }) {
  return (
    <div className={styles.Matches}>
      {matches &&
        matches.map((match) => {
          return (
            <div className={styles.Match} key={match.fixture.id}>
              <Time time={match.fixture.status} />
              <Team team={match.teams.home} leagueId={match.league.id} season={match.league.season} />
              <Score score={match.score} />
              <Team team={match.teams.away} leagueId={match.league.id} season={match.league.season} />
            </div>
          );
        })}
    </div>
  );
}
