import React from 'react';
import { useRouter } from 'next/router';
import useStatistics from '@/hooks/useStatistics';
import Form from '../../standings/Form';
import TeamStatisticsList from './TeamStatisticsList';
import Loading from '@/components/Loading';

export default function Statistics() {
    const router = useRouter();
    const { query } = router;
    const { statistics, isLoading, isError } = useStatistics(
        query.team,
        query.teamID,
        query.leagueID,
        query.season
    );

    if (isLoading)
        return (
            <div className="Team__Statistics">
                <Loading />
            </div>
        );

    if (isError)
        return (
            <div className="Team__Statistics">
                <h2 className="Error">There was an error!</h2>
            </div>
        );

    return (
        <>
            <div className="Team__Statistics">
                <div className="Team__Form">
                    Form: <Form form={statistics.form} />
                </div>
                <div className="Team-Statistics__List">
                    <TeamStatisticsList statistics={statistics} />
                </div>
            </div>
        </>
    );
}
