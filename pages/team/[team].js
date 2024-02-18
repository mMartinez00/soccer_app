import React from 'react';
import TeamFacts from '@/components/team/facts/TeamFacts';
import TeamStatistics from '@/components/team/statistics/TeamStatistics';
import TeamSquad from '@/components/team/squad/TeamSquad';

export default function Team() {
    return (
        <>
            <TeamFacts />
            <TeamStatistics />
            <TeamSquad />
        </>
    );
}
