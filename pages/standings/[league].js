import React from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import League from '@/components/League';
import StandingsTable from '@/components/standings/StandingsTable';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Standings() {
    const router = useRouter();
    const { query } = router;

    const { data, error, isLoading } = useSWR(
        `/api/standings/league/${query.league}?leagueId=${query.leagueId}&season=${query.season}`,
        fetcher
    );

    const standings = data ? data.response[0].league.standings : null;
    // const name = data ? data.response[0].league.name : null;
    // const logo = data ? data.response[0].league.logo : null;
    // const season = data ? data.response[0].league.season : null;
    // data && console.log(data);
    console.log(data);

    if (isLoading)
        return (
            <>
                <h1>Loading...</h1>
            </>
        );

    return (
        <>
            {standings.map((table, index) => (
                <StandingsTable key={standings[index][0].group} table={table} />
            ))}
        </>
    );
}
