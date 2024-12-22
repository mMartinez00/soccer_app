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
                        Full Name:{' '}
                        <strong>
                            {player?.firstname} {player?.lastname}
                        </strong>
                    </p>
                    <p className="Player-Profile__DOB">
                        Date of Birth:{' '}
                        <strong>
                            {new Date(player?.birth.date).toLocaleDateString()}{' '}
                            {''} {`(age ${player?.age})`}
                        </strong>
                    </p>
                    <p className="Player-Profile__POB">
                        Place of Birth:{' '}
                        <strong>
                            {player.birth.place
                                ? `${player.birth.place},`
                                : 'N/A,'}{' '}
                            {player?.birth.country}
                        </strong>
                    </p>
                    <p className="Player-Profile__Nationality">
                        Nationality:{' '}
                        <strong> {player && player.nationality}</strong>
                    </p>
                    <p className="Player-Profile__Height">
                        Height:{' '}
                        <strong>
                            {' '}
                            {player?.height}{' '}
                            {player.height
                                ? `(${cmToFeet(player?.height)})`
                                : 'N/A'}
                        </strong>
                    </p>
                    <p className="Player-Profile__Weight">
                        Weight:{' '}
                        <strong>
                            {' '}
                            {player?.weight}{' '}
                            {player.weight
                                ? `(${kgToPounds(player?.weight)})`
                                : 'N/A'}
                        </strong>
                    </p>
                    <p className="Player-Profile__Position">
                        Position: <strong>{position}</strong>
                    </p>
                </div>
            </div>
        </div>
    );
}
