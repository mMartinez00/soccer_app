import React from 'react';
import useSWR from 'swr';
import { useRouter } from 'next/router';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Players() {
    const router = useRouter();
    const { query } = router;

    const { data, error, isLoading } = useSWR(
        `/api/players/season/players?id=${query.playerId}&season=${query.season}`,
        fetcher
    );

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return <div>Player</div>;
}
