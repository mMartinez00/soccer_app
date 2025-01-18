import React from 'react';
import { useRouter } from 'next/router';
import useStandings from '@/hooks/useStandings';
import StandingsTable from './StandingsTable';
import Loading from '../Loading';

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
            <div className="Standings__Container">
                <Loading />
            </div>
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

    const { league } = data.response[0];

    return (
        <div className="Standings__Container">
            <h1 className="Standings__League-Name">
                {league.country} - {league.name} {league.season} -{' '}
                {league.season + 1}
            </h1>
            <div className="Standings__Tables">
                {league.standings.map((table) => {
                    console.log(table);
                    return <StandingsTable key={table.group} table={table} />;
                })}
            </div>
        </div>
    );
}
