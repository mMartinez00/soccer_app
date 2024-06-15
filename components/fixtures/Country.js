import React from 'react';
import Image from 'next/image';

export default function Country({ country, flag }) {
    return (
        <>
            <span className="Country">
                {flag && <Image src={flag} width={25} height={25} alt="flag" />}{' '}
                {country}
            </span>
        </>
    );
}
