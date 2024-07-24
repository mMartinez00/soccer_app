import React from 'react';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import { fetcher } from '@/utils/utils';
import Squad from './Squad';

function useSquad(teamID) {
    const { data, isLoading, error } = useSWR(`api/team/squads/${teamID}`);

    return {
        squad: data,
        isLoading,
        isError: error,
    };
}

export default function TeamSquads() {
    const router = useRouter();
    const { query } = router;
    const { data, error, isLoading } = useSWR(
        `http://localhost:8000/response`,
        fetcher
    );

    // if (data && data.response.length === 0) {
    //     return (
    //         <>
    //             <h2>Team roster not found</h2>
    //         </>
    //     );
    // }

    // const players = data ? data.response[0].players : null;
    const squad = data ? data[0].players : null;

    // if (isLoading) {
    //     return (
    //         <>
    //             <h2>Loading...</h2>
    //         </>
    //     );
    // }

    // data && console.log(data);

    return (
        <div className="Team_Squad">
            <Squad squad={squad} season={query.season} />
        </div>
    );
}
