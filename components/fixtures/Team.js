import React from 'react';
import Image from 'next/image';

export default function Team({ team }) {
    return (
        <>
            <span className="Team">
                <Image
                    src={team && team.logo}
                    width={100}
                    height={100}
                    alt="logo"
                />{' '}
                {team.name}
            </span>
        </>
    );
}
