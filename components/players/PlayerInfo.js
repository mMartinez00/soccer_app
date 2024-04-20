import React from 'react';
import Image from 'next/image';

const extractDigits = (string) => string.match(/\d+/gm);

function cmToFeet(cm) {
    const digit = extractDigits(cm);
    const inches = +digit[0] / 2.54;
    const feet = Math.floor(inches / 12);
    const remainingInches = inches % 12;

    return `${feet}ft ${Math.round(remainingInches)}in`;
}

function kgToPounds(kg) {
    const digit = extractDigits(kg);
    const pounds = +digit[0] * 2.025;

    return `${Math.round(pounds)}lbs`;
}

export default function PlayerInfo({ player, position }) {
    return (
        <>
            <div className="PlayerInfo">
                <div className="Player">
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
                            Weight: {player.weight} ({kgToPounds(player.weight)}
                            )
                        </p>
                        <p className="Position">Position: {position}</p>
                    </div>
                </div>
            </div>
        </>
    );
}
