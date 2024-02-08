import React from 'react';
import Image from 'next/image';

export default function TeamPlayer({ player }) {
    return (
        <>
            <div className="playerPhoto">
                <Image
                    src={player.photo}
                    width={100}
                    height={100}
                    alt="photo"
                />
            </div>
            <div className="playerInfo">
                <p className="name">Name: {player.name}</p>
                <p className="age">Age: {player.age}</p>
                <p className="number">
                    Number: {player.number && player.number}
                </p>
                <p className="position">Position: {player.position}</p>
            </div>
        </>
    );
}
