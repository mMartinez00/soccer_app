import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function TeamPlayers({ players, season }) {
    // console.log(players);
    // players && console.log(players);
    return (
        <>
            {players &&
                players.map((player) => {
                    return (
                        <div
                            className="Player"
                            key={player.name}
                            style={{ display: 'flex' }}
                        >
                            <div className="Player_Photo">
                                <Image
                                    src={player.photo}
                                    width={100}
                                    height={100}
                                    alt="photo"
                                />
                            </div>
                            <div className="Player_Info">
                                <p className="Name">
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
                                <p className="Age">Age: {player.age}</p>
                                <p className="Number">
                                    Number: {player.number && player.number}
                                </p>
                                <p className="Position">
                                    Position: {player.position}
                                </p>
                            </div>
                        </div>
                    );
                })}
        </>
    );
    // return (
    //     <>
    //         <div className="playerPhoto">
    //             <Image
    //                 src={player.photo}
    //                 width={100}
    //                 height={100}
    //                 alt="photo"
    //             />
    //         </div>
    //         <div className="playerInfo" style={{ color: 'white' }}>
    //             <p className="name">
    //                 Name:{' '}
    //                 <span>
    //                     <Link
    //                         href={{
    //                             pathname: `/players/${player.name}`,
    //                             query: {
    //                                 playerId: `${player.id}`,
    //                                 season: `${season}`,
    //                             },
    //                         }}
    //                     >
    //                         {player.name}
    //                     </Link>
    //                 </span>
    //             </p>
    //             <p className="age">Age: {player.age}</p>
    //             <p className="number">
    //                 Number: {player.number && player.number}
    //             </p>
    //             <p className="position">Position: {player.position}</p>
    //         </div>
    //     </>
    // );
}
