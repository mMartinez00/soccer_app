import React from 'react';
import Image from 'next/image';

export default function Team({ team }) {
    return (
        <div className="Team">
            <div className="Team_Logo_Container">
                <Image
                    src={team && team.logo}
                    width={175}
                    height={175}
                    alt="Team_Logo"
                />
            </div>
            <div className="Content">
                <p className="Team_Name">Name: {team && team.name} </p>
                <p className="Team_Code">Code: {team && team.code}</p>
                <p className="Team_Country">Country: {team && team.country}</p>
                <p className="Year_Founded">Founded: {team && team.founded}</p>
            </div>
        </div>
    );
}
