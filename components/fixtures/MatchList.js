import React, { useState } from 'react';
import Button from '../Button';
import Competition from './Competition';
import MatchDate from '../MatchDate';

export default function MatchList({ live, all }) {
    const [fixtures, setFixtures] = useState(all);

    const handleClick = (e) => {
        fixtures === all ? setFixtures(live) : setFixtures(all);

        e.target.classList.toggle('Active');
    };

    return (
        <div className="Fixtures">
            <div className="Fixtures__Controls">
                <Button
                    type="Toggle"
                    children="Live"
                    handleClick={handleClick}
                />
                <MatchDate />
            </div>
            <section className="Fixtures__List">
                {Object.entries(fixtures).map((fixture) => {
                    return (
                        <Competition
                            key={fixture[0]}
                            league={fixture[1][0].league}
                            matches={fixture[1]}
                        />
                    );
                })}
            </section>
        </div>
    );
}
