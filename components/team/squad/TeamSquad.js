import React from 'react';
import { useRouter } from 'next/router';
import useSquad from '@/hooks/useSquad';
import Squad from './Squad';
import Loading from '@/components/Loading';

export default function TeamSquads() {
    const router = useRouter();
    const { query } = router;
    const { data, isLoading, isError } = useSquad(query.teamID);

    if (data && data.response.length === 0) {
        return (
            <div className="Team__Squad Team__Squad--Unavailable">
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
