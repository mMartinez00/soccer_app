import React, { useEffect, useRef, memo } from 'react';
import LeagueCard from './LeagueCard';

const MatchList = memo(function MatchList({ matches }) {
    const ref = useRef([]);
    const options = {
        root: null,
        threshold: 0.3,
        rootMargin: '50px',
    };
    const cb = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('Visible');
            }
        });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(cb, options);

        ref.current.forEach((ref) => observer.observe(ref));

        return () => ref.current.forEach((ref) => observer.unobserve(ref));
    }, [matches]);

    return (
        <section className="Matches__List">
            {matches &&
                Object.entries(matches).map(([league, matches], index) => (
                    <LeagueCard
                        key={league}
                        league={matches[0].league}
                        matches={matches}
                        myRef={(el) => {
                            if (el) {
                                ref.current[index] = el;
                            }
                        }}
                    />
                ))}
        </section>
    );
});

export default MatchList;
