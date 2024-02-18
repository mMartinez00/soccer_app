import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function TeamPlayer({ player, season }) {
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
                <p className="name">
                    Name:{' '}
                    <span>
                        <Link
                            href={{
                                pathname: `/players/${player.name}`,
                                query: {
                                    playerId: `${player.id}`,
                                    season: `${season}`,
                                },
                            }}
                        >
                            {player.name}
                        </Link>
                    </span>
                </p>
                <p className="age">Age: {player.age}</p>
                <p className="number">
                    Number: {player.number && player.number}
                </p>
                <p className="position">Position: {player.position}</p>
            </div>
        </>
    );
}
