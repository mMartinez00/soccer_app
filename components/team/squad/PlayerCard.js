import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function PlayerCard({ players, season }) {
    return (
        <>
            {players &&
                players.map((player) => {
                    return (
                        <article className="Player-Card" key={player.name}>
                            <Link
                                className="Player-Card__Link"
                                href={{
                                    pathname: `/player/${player.name}`,
                                    query: {
                                        playerID: `${player.id}`,
                                        season: `${season}`,
                                    },
                                }}
                            >
                                <div className="Player-Card__Content">
                                    <figure className="Player-Card__Photo ">
                                        <Image
                                            src={player.photo}
                                            width={100}
                                            height={100}
                                            className="Player-Card__Image"
                                            alt={`Photo of ${player.name}`}
                                        />
                                    </figure>

                                    <div className="Player-Card__Info">
                                        <p className="Player-Card__Name">
                                            Name: {player.name}
                                        </p>
                                        <p className="Player-Card__Age">
                                            Age: {player.age}
                                        </p>
                                        <p className="Player-Card__Number">
                                            Number:{' '}
                                            {player.number && player.number}
                                        </p>
                                        <p className="Player-Card__Position">
                                            Position: {player.position}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </article>
                    );
                })}
        </>
    );
}
