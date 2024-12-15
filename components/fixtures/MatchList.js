import React, { useState } from 'react';
import Button from '../Button';
import Competition from './Competition';
import MatchDate from '../MatchDate';

export default function MatchList({ live, all }) {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    const displayedMatches = isActive ? live : all;

    return (
        <div className="Matches__Container">
            <div className="Matches__Controls">
                <Button
                    handleClick={() => handleClick()}
                    className={`Button Button-Toggle${
                        isActive ? ' Active' : ''
                    }`}
                >
                    Live
                </Button>
                <MatchDate />
            </div>
            <section className="Matches__List">
                {Object.entries(displayedMatches).map(([league, matches]) => (
                    <Competition
                        key={league}
                        league={matches[0].league}
                        matches={matches}
                    />
                ))}
            </section>
        </div>
    );
}
