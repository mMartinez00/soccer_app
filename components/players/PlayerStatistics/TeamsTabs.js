import React from 'react';

export default function TeamsTabs({ teams }) {
    return (
        <div className="Tabs" style={{ display: 'flex' }}>
            {teams.map((team) => {
                return (
                    <div key={team} className="Tab">
                        <span className="Team">{team}</span>
                    </div>
                );
            })}
        </div>
    );
}
