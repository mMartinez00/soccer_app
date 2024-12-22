import React from 'react';
import Image from 'next/image';
import { cmToFeet, kgToPounds } from '@/utils/utils';

export default function PlayerProfile({ player, position }) {
    return (
        <div className="Player-Profile">
            <div className="Player-Profile__Container">
                <div className="Player-Profile__Header">
                    <h1 className="Player-Profile__Name">{player?.name}</h1>
                    <div className="Player-Profile__Photo-Container">
                        <Image
                            src={player && player.photo}
                            width={200}
                            height={200}
                            alt={`Photo of ${player.firstname} ${player.lastname}`}
                            className="Player-Profile__Photo"
                        />
                    </div>
                </div>
                <div className="Player-Profile__Info">
                    <p className="Player-Profile__Full-Name">
                        Full Name: {player?.firstname} {player?.lastname}
                    </p>
                    <p className="Player-Profile__DOB">
                        Date of Birth:{' '}
                        {new Date(player?.birth.date).toLocaleDateString()} {''}{' '}
                        {`(age ${player?.age})`}
                    </p>
                    <p className="Player-Profile__POB">
                        Place of Birth:{' '}
                        {player.birth.place ? `${player.birth.place},` : 'N/A,'}{' '}
                        {player?.birth.country}
                    </p>
                    <p className="Player-Profile__Nationality">
                        Nationality: {player && player.nationality}
                    </p>
                    <p className="Player-Profile__Height">
                        Height: {player?.height}{' '}
                        {player.height
                            ? `(${cmToFeet(player?.height)})`
                            : 'N/A'}
                    </p>
                    <p className="Player-Profile__Weight">
                        Weight: {player?.weight}{' '}
                        {player.weight
                            ? `(${kgToPounds(player?.weight)})`
                            : 'N/A'}
                    </p>
                    <p className="Player-Profile__Position">
                        Position: {position}
                    </p>
                </div>
            </div>
        </div>
    );
}
