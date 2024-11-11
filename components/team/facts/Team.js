import React from 'react';
import Image from 'next/image';

export default function Team({ team }) {
    return (
        <div className="Team__Details">
            <figure className="Team__Logo-Container">
                <Image
                    src={team && team.logo}
                    width={200}
                    height={200}
                    alt="Team__Logo"
                    className="Team-Logo__Image"
                />
            </figure>
            <div className="Team__Content">
                <p className="Team__Content-Name">Name: {team && team.name} </p>
                <p className="Team__Content-Code">Code: {team && team.code}</p>
                <p className="Team__Content-Country">
                    Country: {team && team.country}
                </p>
                <p className="Team__Content-Founded">
                    Founded: {team && team.founded}
                </p>
            </div>
        </div>
    );
}
