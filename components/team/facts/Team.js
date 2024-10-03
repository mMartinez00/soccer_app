import React from 'react';
import Image from 'next/image';

export default function Team({ team }) {
    return (
        <div className="Team">
            <div className="Team__Logo-Container">
                <Image
                    src={team && team.logo}
                    width={175}
                    height={175}
                    alt="Team__Logo"
                />
            </div>
            <div className="Team__Content">
                <p className="Team__Name">Name: {team && team.name} </p>
                <p className="Team__Code">Code: {team && team.code}</p>
                <p className="Team__Country">Country: {team && team.country}</p>
                <p className="Team__Founded">Founded: {team && team.founded}</p>
            </div>
        </div>
    );
}
