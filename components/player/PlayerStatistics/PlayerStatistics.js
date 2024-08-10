import React, { useState, useRef } from 'react';
import StatisticsTable from './StatisticsTable';
import TeamsTabs from './TeamsTabs';
import StatButtons from './StatButtons';
import { groupedByTeam } from '@/utils/utils';

export default function PlayerStatistics({ statistics }) {
    const [playersStatistics, setPlayersStatistics] = useState('General');
    const myTableRefs = useRef([]);
    const mySliderRef = useRef(null);

    const data = Object.values(groupedByTeam(statistics));
    const teams = Object.keys(groupedByTeam(statistics));

    const handleButtonCLick = (e) => {
        setPlayersStatistics(e.target.innerText);
    };

    const handleTabClick = (e, index) => {
        let slider = mySliderRef;
        let currPos = parseInt(mySliderRef.current.dataset.pos);
        let newPos = parseInt(e.target.dataset.pos);

        let newDirection = newPos > currPos ? 'right' : 'left';
        let currentDirection = newPos < currPos ? 'right' : 'left';
        slider.current.dataset.pos = newPos;

        console.log(slider);
    };

    return (
        <>
            <div className="Statistics" style={{ overflow: 'hidden' }}>
                <TeamsTabs teams={teams} handleClick={handleTabClick} />
                <StatButtons handleClick={handleButtonCLick} />
                <div
                    className="Tables"
                    style={{
                        width: '100%',
                        height: '200px',
                        border: '1px red solid',
                        position: 'relative',
                        // overflow: 'hidden',
                    }}
                >
                    <div
                        className="Table_Container_Slider"
                        data-pos="0"
                        ref={mySliderRef}
                        style={{
                            // background: 'black',
                            display: 'flex',
                            width: '100%',
                            position: 'absolute',
                        }}
                    >
                        {data.map((teamData, index) => {
                            const tableRef = (el) =>
                                (myTableRefs.current[index] = el);

                            return (
                                <>
                                    <StatisticsTable
                                        key={teamData[0].team.name}
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
