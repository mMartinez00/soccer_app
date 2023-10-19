import React from "react";
import Competition from "./Competition";

export default function Fixtures({ data }) {
  const sortFixturesByCountryAlphabetically = data.sort((a, b) => {
    const leagueA = a.league.country.toUpperCase();
    const leagueB = b.league.country.toUpperCase();

    return leagueA > leagueB ? 1 : leagueA < leagueB ? -1 : 0;
  });

  const groupFixturesByLeague = sortFixturesByCountryAlphabetically.reduce(
    (a, b) => {
      const key = `${b.league.country} - ${b.league.name}`;
      if (!a[key]) {
        a[key] = [];
      }

      a[key].push(b);

      return a;
    },
    {}
  );

  const leagueAndMatchesArray = Object.entries(groupFixturesByLeague);

  return (
    <section className="Fixtures">
      {leagueAndMatchesArray &&
        leagueAndMatchesArray.map((fixture) => {
          return (
            <Competition
              key={fixture[0]}
              league={fixture[1][0].league}
              matches={fixture[1]}
            />
          );
        })}
    </section>
  );
}
