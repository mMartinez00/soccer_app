import React from 'react';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import { fetcher } from '@/utils/utils';
import Team from './Team';
import Venue from './Venue';
import Loading from '@/components/Loading';

function useFacts(teamID) {
    const { data, error, isLoading } = useSWR(
        `/api/team/id/${teamID}`,
        fetcher
    );

    return {
        facts: data && data.response[0],
        isLoading,
        isError: error,
    };
}

export default function TeamFacts() {
    const router = useRouter();
    const { query } = router;
    const { facts, isLoading, isError } = useFacts(query.teamID);
    console.log(facts);

    if (isLoading)
        return (
            <div className="Team__Facts">
                <Loading />
            </div>
        );

    if (isError)
        return (
            <div className="Team__Facts">
                <h2>Error</h2>
            </div>
        );

    return (
        <div className="Team__Facts">
            <Team team={facts.team} />
            <Venue venue={facts.venue} />
        </div>
    );
}
