import React from 'react';
import { filterPosition } from '@/utils/utils';
import TeamPlayers from './TeamPlayers';

export default function Squad({ squad, season }) {
    const goalkeepers = squad && filterPosition(squad, 'Goalkeeper');
    const defenders = squad && filterPosition(squad, 'Defender');
    const midfielders = squad && filterPosition(squad, 'Midfielder');
    const attackers = squad && filterPosition(squad, 'Attacker');

    return (
        <div className="Squad">
            <div className="Goalkeepers_Container">
                <h2 className="Position_Heading">Goalkeepers</h2>
                <div className="Goalkeepers">
                    <TeamPlayers season={season} players={goalkeepers} />
                </div>
            </div>
            <div className="Defenders_Container">
                <h2 className="Position_Heading">Defenders</h2>
                <div className="Defenders">
                    <TeamPlayers season={season} players={defenders} />
                </div>
            </div>
            <div className="Midfielders_Container">
                <h2 className="Position_Heading">Midfielders</h2>
                <div className="Midfielders">
                    <TeamPlayers season={season} players={midfielders} />
                </div>
            </div>
            <div className="Attackers_Container">
                <h2 className="Position_Heading">Attackers</h2>
                <div className="Attackers">
                    <TeamPlayers season={season} players={attackers} />
                </div>
            </div>
        </div>
    );
}
