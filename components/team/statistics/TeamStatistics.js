import React from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import Dropdown from '../../Dropdown';
import Form from '../../standings/Form';
import MatchesPlayed from './MatchesPlayed';
import GoalsScored from './GoalsScored';
import GoalsAgainst from './GoalsAgainst';
import Penalties from './Penalties';
import Cards from './Cards';
import Streaks from './Streaks';
import styles from '../../../styles/Statistics.module.css';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Statistics() {
    const router = useRouter();
    const { query } = router;
    const { data, error, isLoading } = useSWR(
        `/api/team/statistics/${query.team}?teamId=${query.teamId}&leagueId=${query.leagueId}&season=${query.season}`,
        fetcher
    );

    // console.log(query);

    if (isLoading)
        return (
            <>
                <h1>Loading...</h1>
            </>
        );

    return (
        <>
            <div className="statistics">
                <p className="season">
                    Season: <Dropdown />
                </p>
                <p className="form">
                    Form: <Form form={data.response.form} />
                </p>
                <div className={styles.matchesPlayed}>
                    <MatchesPlayed matchesPlayed={data.response.fixtures} />
                </div>
                <div className={styles.goals}>
                    <GoalsScored goalsScored={data.response.goals.for} />
                    <GoalsAgainst goalsAgainst={data.response.goals.against} />
                </div>
                <div className={styles.biggest}>
                    <Streaks
                        cleanSheets={data.response.clean_sheet}
                        biggest={data.response.biggest}
                    />
                </div>
                <div className={styles.penalties}>
                    <Penalties penalties={data.response.penalty} />
                </div>
                <div className={styles.cards}>
                    <Cards cards={data.response.cards} />
                </div>
            </div>
        </>
    );
}
