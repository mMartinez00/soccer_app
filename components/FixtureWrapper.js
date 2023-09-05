import React from "react";
import Image from "next/image";

export default function FixtureWrapper({ fixture }) {
  return (
    <div className="Match">
      {fixture && (
        <>
          <div className="Match_row">
            <span>
              {fixture.fixture.status.long}: {fixture.fixture.status.elapsed}
            </span>
          </div>
          <div className="Match_row">
            <div className="Match_Teams">
              <h4 className="Team">
                {fixture.teams.home.name}{" "}
                <Image
                  src={fixture.teams.home.logo}
                  height={25}
                  width={25}
                  alt="logo"
                />
              </h4>
              <span className="Match_Score">
                {fixture.score.halftime.home} : {fixture.score.halftime.away}
              </span>
              <h4 className="Team">
                {fixture.teams.away.name}{" "}
                <Image
                  src={fixture.teams.away.logo}
                  height={25}
                  width={25}
                  alt="logo"
                />
              </h4>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
