import React from 'react';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import TeamPlayer from './TeamPlayer';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function TeamSquads() {
    const router = useRouter();
    const { query } = router;
    const { data, error, isLoading } = useSWR(
        `/api/team/squads/${query.teamId}`,
        fetcher
    );

    if (data && data.response.length === 0) {
        return (
            <>
                <h2>Team roster not found</h2>
            </>
        );
    }

    const players = data ? data.response[0].players : null;

    if (isLoading) {
        return (
            <>
                <h2>Loading...</h2>
            </>
        );
    }

    return (
        <>
            {players &&
                players.map((player) => {
                    return (
                        <TeamPlayer
                            key={player.id}
                            player={player}
                            season={query.season}
                        />
                    );
                })}
        </>
    );
}
