import React from 'react';
import TeamPlayers from './TeamPlayers';

function filterPosition(array, position) {
    return array && array.filter((player) => player.position === position);
}

export default function Squad({ squad, season }) {
    const goalkeepers = squad && filterPosition(squad, 'Goalkeeper');
    const defenders = squad && filterPosition(squad, 'Defender');
    const midfielders = squad && filterPosition(squad, 'Midfielder');
    const attackers = squad && filterPosition(squad, 'Attacker');

    return (
        <div className="Squad" style={{ display: 'flex', color: 'white' }}>
            <div className="Goalkeepers">
                <TeamPlayers players={goalkeepers} season={season} />
            </div>
            <div className="Defenders">
                <TeamPlayers players={defenders} season={season} />
            </div>
            <div className="Midfielders">
                <TeamPlayers players={midfielders} season={season} />
            </div>
            <div className="Attackers">
                <TeamPlayers players={attackers} season={season} />
            </div>
        </div>
    );
}
