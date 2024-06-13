import React from 'react';
import Image from 'next/image';
import { cmToFeet, kgToPounds } from '@/components/players/utils';

export default function PlayerInfo({ player, position }) {
    return (
        <div className="PlayerInfo">
            <div className="Player" style={{ display: 'flex' }}>
                <div className="Name">
                    <h1 className="PlayerName">{player.name}</h1>
                    <div className="PlayerPhoto">
                        <Image
                            src={player.photo}
                            width={200}
                            height={200}
                            alt="player_photo"
                        />
                    </div>
                </div>
                <div className="Info">
                    <p className="PlayerFullName">
                        Full Name: {player.firstname} {player.lastname}
                    </p>
                    <p className="DOB">
                        Date of Birth:{' '}
                        {new Date(player.birth.date).toLocaleDateString()}
                    </p>
                    <p className="POB">
                        Place of Birth: {player.birth.place},{' '}
                        {player.birth.country}
                    </p>
                    <p className="Nationality">
                        Nationality: {player.nationality}
                    </p>
                    <p className="Height">
                        Height: {player.height} ({cmToFeet(player.height)})
                    </p>
                    <p className="Weight">
                        Weight: {player.weight} ({kgToPounds(player.weight)})
                    </p>
                    <p className="Position">Position: {position}</p>
                </div>
            </div>
        </div>
    );
}
