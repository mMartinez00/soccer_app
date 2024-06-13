import React from 'react';

export default function TeamsTabs({ teams, handleClick }) {
    return (
        <div className="Tabs" style={{ display: 'flex' }}>
            <span className="indicator"></span>
            {teams.map((team, index) => {
                return (
                    <button
                        data-pos={`${index}`}
                        key={team}
                        className="Tab"
                        style={{ margin: '5px' }}
                        onClick={(e) => handleClick(e, index)}
                    >
                        {team}
                    </button>
                );
            })}
        </div>
    );
}
