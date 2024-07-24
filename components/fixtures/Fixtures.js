import React, { useState } from 'react';
import Toggle from './Toggle';
import Competition from './Competition';

export default function Fixtures({ live, all }) {
    const [fixtures, setFixtures] = useState(all);

    const handleClick = () => {
        fixtures === all ? setFixtures(live) : setFixtures(all);
    };

    return (
        <div className="Fixtures">
            <Toggle handleClick={handleClick} />
            <section>
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
