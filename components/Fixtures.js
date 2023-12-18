import React, { useState } from "react";
import Toggle from "./Toggle";
import Competition from "./Competition";

export default function Fixtures({ live, all }) {
  const [liveGames, setLiveGames] = useState(false);

  const handleClick = () => {
    liveGames === false ? setLiveGames(true) : setLiveGames(false);
  };

  const gamesAndLeaguesArray = liveGames
    ? Object.entries(live)
    : Object.entries(all);

  return (
    <>
      <Toggle handleClick={handleClick} />
      <section className="Fixtures">
        {gamesAndLeaguesArray &&
          gamesAndLeaguesArray.map((fixture) => {
            return (
              <Competition
                key={fixture[0]}
                league={fixture[1][0].league}
                matches={fixture[1]}
              />
            );
          })}
      </section>
    </>
  );
}
