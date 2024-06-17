import React from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import Form from '../../standings/Form';
import MatchesPlayed from './MatchesPlayed';
import GoalsScored from './GoalsScored';
import GoalsAgainst from './GoalsAgainst';
import Penalties from './Penalties';
import Cards from './Cards';
import Streaks from './Streaks';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Statistics() {
    const router = useRouter();
    const { query } = router;
    const { data, error, isLoading } = useSWR(
        `/api/team/statistics/${query.team}?teamId=${query.teamId}&leagueId=${query.leagueId}&season=${query.season}`,
        fetcher
    );

    if (isLoading)
        return (
            <>
                <h1>Loading...</h1>
            </>
        );

    return (
        <>
            <div className="statistics">
                <p className="form">
                    Form: <Form form={data.response.form} />
                </p>
                <div>
                    <MatchesPlayed matchesPlayed={data.response.fixtures} />
                </div>
                <div>
                    <GoalsScored goalsScored={data.response.goals.for} />
                    <GoalsAgainst goalsAgainst={data.response.goals.against} />
                </div>
                <div>
                    <Streaks
                        cleanSheets={data.response.clean_sheet}
                        biggest={data.response.biggest}
                    />
                </div>
                <div>
                    <Penalties penalties={data.response.penalty} />
                </div>
                <div>
                    <Cards cards={data.response.cards} />
                </div>
            </div>
        </>
    );
}
