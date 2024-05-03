import React from 'react';
import useSWR from 'swr';
import PlayerInfo from '@/components/players/PlayerInfo/PlayerInfo';
import PlayerStatistics from '@/components/players/PlayerStatistics/PlayerStatistics';
import { useRouter } from 'next/router';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Players() {
    const router = useRouter();
    const { query } = router;

    // const { data, error, isLoading } = useSWR(
    //     `/api/players/season/players?id=${query.playerId}&season=${query.season}`,
    //     fetcher
    // );

    const { data, error, isLoading } = useSWR(
        'http://localhost:8000/response',
        fetcher
    );

    // const player = data ? data.response[0].player : null;
    // const statistics = data ? data.response[0].statistics : null;
    // const position = data
    //     ? data.response[0].statistics[0].games.position
    //     : null;

    // Variables were created to display data from local json-server. NOTE: when completed change 'player' props from 'player.player' to 'player'
    const player = data ? data[0] : null;
    const statistics = player ? player.statistics : null;
    const position = player ? player.statistics[0].games.position : null;

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return (
        <>
            <PlayerInfo player={player.player} position={position} />
            <PlayerStatistics statistics={statistics} />
        </>
    );
}
