import React from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { fetcher } from '@/utils/utils';
import Form from '../../standings/Form';
import TeamStatisticsList from './TeamStatisticsList';
import Loading from '@/components/Loading';

// function useStatistics(team, teamID, leagueID, season) {
//     const { data, error, isLoading } = useSWR(
//         `/api/team/statistics/${team}?teamId=${teamID}&leagueId=${leagueID}&season=${season}`,
//         fetcher
//     );

//     return {
//         statistics: data && data.response,
//         isLoading,
//         isError: error,
//     };
// }

export default function Statistics() {
    const router = useRouter();
    const { query } = router;
    const { data, error, isLoading } = useSWR(
        'http://localhost:8000/response',
        fetcher
    );
    // data && console.log(data);
    // const { statistics, isLoading, isError } = useStatistics(
    //     query.team,
    //     query.teamID,
    //     query.leagueID,
    //     query.season
    // );

    if (isLoading)
        return (
            <>
                <Loading />
            </>
        );

    // if (isError)
    //     return (
    //         <>
    //             <h1>Error!</h1>
    //         </>
    //     );

    return (
        <>
            <div className="Team_Statistics" style={{ color: 'white' }}>
                <p className="Team_Form">
                    {/* Form: <Form form={statistics.form} /> */}
                    Form: <Form form={data && data.form} />
                </p>
                <div className="All_Statisitics_List">
                    {/* <TeamStatisticsList statistics={statistics} /> */}
                    <TeamStatisticsList statistics={data && data} />
                </div>
            </div>
        </>
    );
}
