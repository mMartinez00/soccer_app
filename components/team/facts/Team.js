import React from 'react';
import Image from 'next/image';

export default function Team({ team }) {
    return (
        <div className="Team">
            <p className="teamName">
                Name: {team.name}{' '}
                <span className="teamLogo">
                    <Image
                        src={team.logo && team.logo}
                        width={100}
                        height={100}
                        alt="logo"
                    />
                </span>
            </p>
            <p className="teamCode">Code: {team.code}</p>
            <p className="teamCountry">Country: {team.country}</p>
            <p className="yearFounded">Founded: {team.founded}</p>
        </div>
    );
}
