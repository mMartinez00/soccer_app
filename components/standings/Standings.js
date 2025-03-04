import React from 'react';
import { useRouter } from 'next/router';
import useStandings from '@/hooks/useStandings';
import StandingsTable from './StandingsTable';
import Loading from '../Loading';
import Image from 'next/image';

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

    console.log(league);

    return (
        <div className="Standings__Container">
            <header className="Standings__Header">
                <div className="Standings__Logo-Container">
                    <figure>
                        <Image
                            src={league.logo}
                            alt={`${league.name} logo`}
                            fill={true}
                            className="Standings__Logo"
                        />
                    </figure>
                </div>
                <h1 className="Standings__League-Name">
                    {league.name}
                    <span className="Standings__League-Country">
                        {league.country}
                    </span>
                </h1>
            </header>
            <div className="Standings__Tables">
                {league.standings.map((table) => {
                    return <StandingsTable key={table.group} table={table} />;
                })}
            </div>
        </div>
    );
}
