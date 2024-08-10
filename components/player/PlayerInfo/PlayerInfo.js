import React from 'react';
import Image from 'next/image';
import { cmToFeet, kgToPounds } from '@/utils/utils';

export default function PlayerInfo({ player, position }) {
    // console.log(player, position);
    return (
        <div className="PlayerInfo">
            <div className="Player" style={{ display: 'flex' }}>
                <div className="Name">
                    <h1 className="PlayerName">{player && player.name}</h1>
                    <div className="PlayerPhoto">
                        <Image
                            src={player && player.photo}
                            width={200}
                            height={200}
                            alt="player_photo"
                        />
                    </div>
                </div>
                <div className="Info">
                    <p className="PlayerFullName">
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
                        {/* {cmToFeet(player && player.height)}) */}
                    </p>
                    <p className="Weight">
                        Weight: {player && player.weight} (
                        {/* {kgToPounds(player && player.weight)}) */}
                    </p>
                    <p className="Position">Position: {position && position}</p>
                </div>
            </div>
        </div>
    );
}
