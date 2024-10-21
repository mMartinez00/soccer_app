import React from 'react';
import { fetcher } from '@/utils/utils';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import StandingsTable from './StandingsTable';
import Loading from '../Loading';

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

    if (isLoading) {
        return (
            <>
                <div className="Standings__Container">
                    <Loading />
                </div>
            </>
        );
    }

    if (data.response.length === 0) {
        return (
            <>
                <div className="Standings__Container">
                    <h2>No Data</h2>
                </div>
            </>
        );
    }

    return (
        <div className="Standings__Container">
            <h1 className="Standings__League-Name">
                {data.response[0].league.country} -{' '}
                {data.response[0].league.name} {data.response[0].league.season}{' '}
                - {data.response[0].league.season + 1}
            </h1>
            <div className="Standings__Tables">
                {data.response[0].league.standings.map((table) => {
                    return <StandingsTable key={table.group} table={table} />;
                })}
            </div>
        </div>
    );
}
