import React from 'react';
import TeamFacts from '@/components/team/TeamFacts';
import TeamStatistics from '@/components/team/TeamStatistics';
import TeamSquads from '@/components/team/TeamSquads';
import { useState } from 'react';

export default function Team() {
    //  const [showStats, setShowStats] = useState(false)

    return (
        <>
            {/* <TeamFacts /> */}
            <TeamStatistics />
            {/* <TeamSquads /> */}
        </>
    );
}
