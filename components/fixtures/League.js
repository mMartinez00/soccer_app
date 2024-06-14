import React from 'react';
import Image from 'next/image';

export default function League({ name, logo }) {
    return (
        <>
            <span className="League_Name">
                {logo && <Image src={logo} width={25} height={25} alt="logo" />}{' '}
                {name}
            </span>
        </>
    );
}
