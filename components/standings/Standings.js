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
    const { data, isLoading, isError } = useStandings(
        query.league,
        query.leagueID,
        query.season
    );

    // const league = data && data[0].league;

    // const standings = data && data.standings;
    // console.log(standings);
    data && console.log(data);
    query && console.log(query);

    if (isLoading) {
        return (
            <>
                <h1>Loading...</h1>
            </>
        );
    }

    return (
        <div className="League_Standings">
            <h1 className="League_Name">
                {data.response[0].league.country} -{' '}
                {data.response[0].league.name} {data.response[0].league.season}{' '}
                - {data.response[0].league.season + 1}
            </h1>
            <div className="League_Tables">
                {data.response[0].league.standings.map((table) => {
                    return <StandingsTable key={table.group} table={table} />;
                })}
            </div>
        </div>
    );
}
