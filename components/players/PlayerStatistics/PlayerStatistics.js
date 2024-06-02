import React, { useState, useRef, forwardRef } from 'react';
import StatisticsTable from './StatisticsTable';
import TeamsTabs from './TeamsTabs';
import StatButtons from './StatButtons';
// import TableHeaders from './TableHeaders';
// import TableBody from './TableBody';

export default function PlayerStatistics({ statistics }) {
    const [playersStatistics, setPlayersStatistics] = useState('General');
    const myRefs = useRef([]);

    const groupedByTeam = statistics.reduce((a, b) => {
        const team = b.team.name;
        if (!a[team]) {
            a[team] = [];
        }

        a[team].push(b);
        return a;
    }, {});

    const data = Object.values(groupedByTeam);
    const keys = Object.keys(groupedByTeam);

    const handleButtonCLick = (e) => {
        setPlayersStatistics(e.target.innerText);
    };

    const handleTabClick = (e) => {
        // console.log(myRefs.current[0]);
        console.log(e);
    };

    // console.log(groupedByTeam);
    // console.log(data);
    // console.log(keys);

    return (
        <>
            <div className="Statistics">
                <TeamsTabs
                    teams={Object.keys(groupedByTeam)}
                    handleClick={handleTabClick}
                />
                <StatButtons handleClick={handleButtonCLick} />
                <div className="Tables">
                    <div className="Table_Container">
                        {data.map((teamData, index) => {
                            const tableRef = (el) =>
                                (myRefs.current[index] = el);
                            return (
                                <>
                                    <StatisticsTable
                                        key={teamData[0].team}
                                        statistics={teamData}
                                        tableHeaders={playersStatistics}
                                        ref={tableRef}
                                    />
                                </>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}
