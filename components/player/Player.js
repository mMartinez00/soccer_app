import React from 'react';
import useSWR from 'swr';
import { fetcher } from '@/utils/utils';
import { useRouter } from 'next/router';
import PlayerInfo from './PlayerInfo/PlayerInfo';
import PlayerStatistics from './PlayerStatistics/PlayerStatistics';

// function usePlayer(playerID, season) {
//     const { data, isLoading, error } = useSWR(
//         `/api/players/season/players?id=${playerID}&season=${season}`,
//         fetcher
//     );

//     return {
//         data,
//         isLoading,
//         isError: error,
//     };
// }

export default function Player() {
    const router = useRouter();
    const { query } = router;
    // const { data, isLoading, isError } = usePlayer(
    //     query.playerID,
    //     query.season
    // );
    const { data, isLoading, error } = useSWR(
        'http://localhost:8000/response',
        fetcher
    );

    // data && console.log(data);

    const player = data && data[0].player;
    const position = data && data[0].statistics[0].games.position;
    const statistics = data && data[0].statistics;

    // // data && console.log(data.response[0].player);
    // const player = data && data.response[0].player;
    // const position = data && data.response[0].statistics[0].games.position;
    // const statistics = data && data.response[0].statistics;

    // console.log(player);
    // console.log(position);
    // console.log(statistics);

    return (
        <>
            <PlayerInfo player={player} position={position} />
            {/* <PlayerStatistics statistics={statistics} /> */}
        </>
    );
}
