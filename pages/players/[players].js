import React from 'react';
import useSWR from 'swr';
import PlayerInfo from '@/components/players/PlayerInfo/PlayerInfo';
import PlayerStatistics from '@/components/players/PlayerStatistics/PlayerStatistics';
import { useRouter } from 'next/router';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Players() {
    const router = useRouter();
    const { query } = router;

    const { data, error, isLoading } = useSWR(
        `/api/players/season/players?id=${query.playerId}&season=${query.season}`,
        fetcher
    );

    const player = data ? data.response[0].player : null;
    const statistics = data ? data.response[0].statistics : null;
    const position = data
        ? data.response[0].statistics[0].games.position
        : null;

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return (
        <>
            <PlayerInfo player={player} position={position} />
            <PlayerStatistics statistics={statistics} />
        </>
    );
}
