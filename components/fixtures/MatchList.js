import React, { useEffect, useRef } from 'react';
import Competition from './Competition';

export default function MatchList({ matches }) {
    const ref = useRef([]);
    const options = {
        root: null,
        threshold: 0.1,
        rootMargin: '-100px',
    };
    const cb = (entries) => {
        const [entry] = entries;
        console.log(entry);
        if (entry.isInteresting) {
            console.log(ref.current);
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(cb, options);

        ref.current.forEach((ref) => observer.observe(ref));

        // console.log(ref.current[0].classList[0]);
    }, []);

    return (
        <section className="Matches__List">
            {matches &&
                Object.entries(matches).map(([league, matches]) => (
                    <Competition
                        key={league}
                        league={matches[0].league}
                        matches={matches}
                        myRef={(el) => el && ref.current.push(el)}
                    />
                ))}
        </section>
    );
}
