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
            <div className="Team__Squad">
                <h2>Squad Unavailable</h2>
            </div>
        );
    }

    const squad = data ? data.response[0].players : null;

    if (isLoading) {
        return (
            <div className="Team__Squad">
                <Loading />
            </div>
        );
    }

    return (
        <div className="Team__Squad">
            <Squad squad={squad} season={query.season} />
        </div>
    );
}
