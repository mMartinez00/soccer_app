import React from 'react';

export default function TeamsTabs({ teams, handleClick }) {
    return (
        <div className="Tabs">
            {teams.map((team, index) => {
                return (
                    <button
                        key={team}
                        className={`Tab ${index === 0 ? 'Active' : ''}`}
                        onClick={(e) => handleClick(e, index)}
                    >
                        {team}
                    </button>
                );
            })}
        </div>
    );
}
