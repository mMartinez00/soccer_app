import React from 'react';
import { useRouter } from 'next/router';
import useFacts from '@/hooks/useFacts';
import Team from './Team';
import Venue from './Venue';
import Loading from '@/components/Loading';

export default function TeamFacts() {
    const router = useRouter();
    const { query } = router;
    const { facts, isLoading, isValidating, isError } = useFacts(query.teamID);

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
