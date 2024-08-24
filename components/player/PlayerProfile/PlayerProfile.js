import React from 'react';
import Image from 'next/image';
import { cmToFeet, kgToPounds } from '@/utils/utils';

export default function PlayerProfile({ player, position }) {
    return (
        <div className="Player_Profile">
            <div className="Profile">
                <div className="Player_Name">
                    <h1 className="Name">{player && player.name}</h1>
                    <div className="Profile_Photo">
                        <Image
                            src={player && player.photo}
                            width={200}
                            height={200}
                            alt="player_photo"
                            className="Photo"
                        />
                    </div>
                </div>
                <div className="Profile_Info">
                    <p className="FullName">
                        Full Name: {player && player.firstname}{' '}
                        {player && player.lastname}
                    </p>
                    <p className="DOB">
                        Date of Birth:{' '}
                        {new Date(
                            player && player.birth.date
                        ).toLocaleDateString()}
                    </p>
                    <p className="POB">
                        Place of Birth: {player && player.birth.place},{' '}
                        {player && player.birth.country}
                    </p>
                    <p className="Nationality">
                        Nationality: {player && player.nationality}
                    </p>
                    <p className="Height">
                        Height: {player && player.height} (
                        {cmToFeet(player && player.height)})
                    </p>
                    <p className="Weight">
                        Weight: {player && player.weight} (
                        {kgToPounds(player && player.weight)})
                    </p>
                    <p className="Position">Position: {position && position}</p>
                </div>
            </div>
        </div>
    );
}
