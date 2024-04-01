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

export default function PlayerInfo({ info }) {
    console.log(info);
    return (
        <>
            <div className="PlayerInfo">
                <div className="Player">
                    <div className="Name">
                        <h1 className="PlayerName">{info.name}</h1>
                        <div className="PlayerPhoto">
                            <Image
                                src={info.photo}
                                width={200}
                                height={200}
                                alt="player_photo"
                            />
                        </div>
                    </div>
                    <div className="Info">
                        <p className="PlayerFullName">
                            Full Name: {info.firstname} {info.lastname}
                        </p>
                        <p className="DOB">
                            Date of Birth:{' '}
                            {new Date(info.birth.date).toLocaleDateString()}
                        </p>
                        <p className="POB">
                            Place of Birth: {info.birth.place},{' '}
                            {info.birth.country}
                        </p>
                        <p className="Nationality">
                            Nationality: {info.nationality}
                        </p>
                        <p className="Height">
                            Height: {info.height} ({cmToFeet(info.height)})
                        </p>
                        <p className="Weight">
                            Weight: {info.weight} ({kgToPounds(info.weight)})
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
