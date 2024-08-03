import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function TeamPlayers({ players, season }) {
    return (
        <>
            {players &&
                players.map((player) => {
                    return (
                        <div className="Player_Card" key={player.name}>
                            <Link
                                className="Player_Link"
                                href={{
                                    pathname: `/players/${player.name}`,
                                    query: {
                                        playerId: `${player.id}`,
                                        season: `${season}`,
                                    },
                                }}
                            >
                                <div className="Player">
                                    <div className="Player_Photo">
                                        <div className="Photo_Container">
                                            <Image
                                                src={player.photo}
                                                width={100}
                                                height={100}
                                                className="Photo"
                                                alt="Photo"
                                            />
                                        </div>
                                    </div>
                                    <div className="Player_Info">
                                        <div className="Content">
                                            <p className="Name">
                                                Name: <span>{player.name}</span>
                                            </p>
                                            <p className="Age">
                                                Age: {player.age}
                                            </p>
                                            <p className="Number">
                                                Number:{' '}
                                                {player.number && player.number}
                                            </p>
                                            <p className="Position">
                                                Position: {player.position}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    );
                })}
        </>
    );
}
