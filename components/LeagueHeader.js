import React from 'react';
import Country from './Country';
import League from './League';
import styles from '@/styles/LeagueHeader.module.css';
import Link from 'next/link';
// import { useRouter } from "next/router";

export default function LeagueHeader({ league }) {
    // if the flag & logo property does not have a value refer to: https://github.com/vercel/next.js/discussions/29545

    return (
        <>
            <Link
                href={{
                    pathname: `/standings/${league.name}`,
                    query: {
                        leagueId: `${league.id}`,
                        season: `${league.season}`,
                    },
                }}
            >
                <Country country={league.country} flag={league.flag} /> -
                <League name={league.name} logo={league.logo} />
            </Link>
        </>
    );
}
