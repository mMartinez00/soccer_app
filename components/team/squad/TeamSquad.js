import React from 'react';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import { fetcher } from '@/utils/utils';
import Squad from './Squad';
import Loading from '@/components/Loading';

function useSquad(teamID) {
    const { data, isLoading, error } = useSWR(
        `/api/team/squads/${teamID}`,
        fetcher
    );

    return {
        data,
        isLoading,
        isError: error,
    };
}

export default function TeamSquads() {
    const router = useRouter();
    const { query } = router;
    const { data, isLoading, isError } = useSquad(query.teamID);

    if (data && data.response.length === 0) {
        return (
            <>
                <h2>Team roster not found</h2>
            </>
        );
    }

    const squad = data ? data.response[0].players : null;

    if (isLoading) {
        return (
            <>
                {/* <h2>Loading...</h2> */}
                <Loading />
            </>
        );
    }

    return (
        <div className="Team_Squad">
            <Squad squad={squad} season={query.season} />
        </div>
    );
}
