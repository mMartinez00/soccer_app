import React from 'react';
import Team from './Team';
import Venue from './Venue';
import useSWR from 'swr';
import { useRouter } from 'next/router';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function TeamFacts() {
    const router = useRouter();
    const { query } = router;
    const { data, error, isLoading } = useSWR(
        `/api/team/id/${query.teamId}`,
        fetcher
    );

    if (isLoading)
        return (
            <>
                <h1>Loading...</h1>
            </>
        );

    return (
        <div className="TeamFacts" style={{ display: 'flex' }}>
            <Team team={data.response[0].team} />
            <Venue venue={data.response[0].venue} />
        </div>
    );
}
