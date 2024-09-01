import React from 'react';
import useSWR from 'swr';
import { fetcher } from '@/utils/utils';
import { useRouter } from 'next/router';
import PlayerProfile from './PlayerProfile/PlayerProfile';
import PlayerStatistics from './PlayerStatistics/PlayerStatistics';
import Loading from '../Loading';

function usePlayer(playerID, season) {
    const { data, isLoading, error } = useSWR(
        `/api/players/season/players?id=${playerID}&season=${season}`,
        fetcher
    );

    return {
        data,
        isLoading,
        isError: error,
    };
}

export default function Player() {
    const router = useRouter();
    const { query } = router;
    const { data, isLoading, isError } = usePlayer(
        query.playerID,
        query.season
    );

    const player = data && data.response[0].player;
    const position = data && data.response[0].statistics[0].games.position;
    const statistics = data && data.response[0].statistics;

    if (isLoading) {
        return (
            <>
                <Loading />
            </>
        );
    }

    return (
        <>
            <PlayerProfile player={player} position={position} />
            <PlayerStatistics statistics={statistics} />
        </>
    );
}
