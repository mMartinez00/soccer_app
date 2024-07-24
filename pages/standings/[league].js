import React from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import StandingsTable from '@/components/standings/StandingsTable';
import PageNotFound from '../PageNotFound';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Standings() {
    const router = useRouter();
    const { query } = router;

    const { data, error, isLoading } = useSWR(
        `/api/standings/league/${query.league}?leagueId=${query.leagueId}&season=${query.season}`,
        fetcher
    );

    if (data && data.response.length === 0) {
        return (
            <>
                <PageNotFound />
            </>
        );
    }

    const standings = data ? data.response[0].league.standings : null;

    data && console.log(data);

    if (isLoading)
        return (
            <>
                <h1>Loading...</h1>
            </>
        );

    return (
        <>
            {standings.map((table, index) => (
                // console.log(table)
                <StandingsTable key={standings[index][0].group} table={table} />
            ))}
        </>
    );
}
