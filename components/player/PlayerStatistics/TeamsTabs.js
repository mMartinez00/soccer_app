import React from 'react';

export default function TeamsTabs({ teams, handleTabClick, activeTab }) {
    return (
        <div className="Tabs">
            {teams.map((team, index) => {
                return (
                    <button
                        key={team}
                        className={`Button Button-Tab${
                            activeTab === index ? ' Active' : ''
                        }`}
                        onClick={() => handleTabClick(index)}
                    >
                        {team}
                    </button>
                );
            })}
        </div>
    );
}
