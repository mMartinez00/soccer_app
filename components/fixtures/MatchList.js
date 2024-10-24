import React, { useState } from 'react';
import Button from '../Button';
import Competition from './Competition';
import MatchDate from '../MatchDate';

export default function MatchList({ live, all }) {
    const [matches, setMatches] = useState(all);
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setMatches((matches) => (matches === all ? live : all));
        setIsActive(!isActive);
    };

    return (
        <div className="Matches">
            <div className="Matches__Controls">
                <Button
                    type="Toggle"
                    handleClick={handleClick}
                    isActive={isActive}
                >
                    Live
                </Button>
                <MatchDate />
            </div>
            <section className="Matches__List">
                {Object.entries(matches).map(([league, leagueMatches]) => {
                    return (
                        <Competition
                            key={league}
                            league={leagueMatches[0].league}
                            matches={leagueMatches}
                        />
                    );
                })}
            </section>
        </div>
    );
}
