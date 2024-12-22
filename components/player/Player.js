import React from 'react';
import { useRouter } from 'next/router';
import usePlayer from '@/hooks/usePlayer';
import PlayerProfile from './PlayerProfile/PlayerProfile';
import PlayerStatistics from './PlayerStatistics/PlayerStatistics';
import Loading from '../Loading';

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
            <div className="Player__Container">
                <Loading />
            </div>
        );
    }

    return (
        <div className="Player__Container">
            <PlayerProfile player={player} position={position} />
            <PlayerStatistics statistics={statistics} />
        </div>
    );
}
