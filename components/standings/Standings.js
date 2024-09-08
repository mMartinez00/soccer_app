import React from 'react';
import { fetcher } from '@/utils/utils';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import StandingsTable from './StandingsTable';

function useStandings(league, leagueID, season) {
    const { data, error, isLoading } = useSWR(
        `/api/standings/league/${league}?leagueId=${leagueID}&season=${season}`,
        fetcher
    );

    return {
        data,
        isLoading,
        isError: error,
    };
}

export default function Standings() {
    const router = useRouter();
    const { query } = router;
    // const { data, isLoading, isError } = useStandings(
    //     query.league,
    //     query.leagueId,
    //     query.season
    // );
    const { data, error, isLoading } = useSWR(
        `http://localhost:8000/response`,
        fetcher
    );

    const league = data && data[0].league;
    // data && console.log(data[0].league);

    console.log(league);

    if (isLoading) {
        return (
            <>
                <h1>Loading...</h1>
            </>
        );
    }

    return (
        <div className="League">
            <h1 className="League_Name">
                {data[0].league.country} - {data[0].league.name}{' '}
                {data[0].league.season} - {data[0].league.season + 1}
            </h1>
            <div className="League_Tables">
                {data[0].league.standings.map((table) => {
                    return <StandingsTable key={table.group} table={table} />;
                })}
            </div>
        </div>
    );
}
