import React from 'react';
import Image from 'next/image';

export default function Team({ team }) {
    return (
        <div className="Team">
            <p className="Team_Name">
                Name: {team.name}{' '}
                <span className="Team_Logo">
                    <Image
                        src={team.logo && team.logo}
                        width={100}
                        height={100}
                        alt="logo"
                    />
                </span>
            </p>
            <p className="Team_Code">Code: {team.code}</p>
            <p className="Team_Country">Country: {team.country}</p>
            <p className="Year_Founded">Founded: {team.founded}</p>
        </div>
    );
}
