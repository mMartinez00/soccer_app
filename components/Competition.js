import React from "react";
import Image from "next/image";
import LeagueHeader from "./LeagueHeader";
import FixtureWrapper from "./FixtureWrapper";

export default function Competition({ fixture }) {
  console.log(fixture);
  return (
    <div className="Fixture">
      <LeagueHeader>
        <Image src={fixture.league.flag} width={30} height={30} alt="flag" />{" "}
        {fixture.league.country} - {fixture.league.name}{" "}
        <Image src={fixture.league.logo} width={30} height={30} alt="logo" />
      </LeagueHeader>
      <FixtureWrapper fixture={fixture} />
    </div>
  );
}
