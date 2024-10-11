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
            <div className="Squad__Position-Container Squad__Position-Container--Goalkeepers ">
                <h2 className="Squad__Position-Heading">Goalkeepers</h2>
                <div className="Squad__Players Squad__Players--Goalkeepers">
                    <TeamPlayers season={season} players={goalkeepers} />
                </div>
            </div>
            <div className="Squad__Position-Container Squad__Position-Container--Defenders">
                <h2 className="Squad__Position-Heading">Defenders</h2>
                <div className="Squad__Players Squad__Players--Defenders">
                    <TeamPlayers season={season} players={defenders} />
                </div>
            </div>
            <div className="Squad__Position-Container Squad__Position-Container--Midfielders">
                <h2 className="Squad__Position-Heading">Midfielders</h2>
                <div className="Squad__Players Squad__Players--Midfielders">
                    <TeamPlayers season={season} players={midfielders} />
                </div>
            </div>
            <div className="Squad__Position-Container Squad__Position-Container--Attackers">
                <h2 className="Squad__Position-Heading">Attackers</h2>
                <div className="Squad__Players Squad__Players--Attackers">
                    <TeamPlayers season={season} players={attackers} />
                </div>
            </div>
        </div>
    );
}
