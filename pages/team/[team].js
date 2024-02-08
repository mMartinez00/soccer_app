import React from 'react';
import TeamFacts from '@/components/team/TeamFacts';
import TeamStatistics from '@/components/team/statistics/TeamStatistics';
import TeamSquad from '@/components/team/squad/TeamSquad';
import { useState } from 'react';

export default function Team() {
    //  const [showStats, setShowStats] = useState(false)

    return (
        <>
            <TeamFacts />
            <TeamStatistics />
            <TeamSquad />
        </>
    );
}
