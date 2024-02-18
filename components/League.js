import React from 'react';
import Image from 'next/image';

export default function League({ name, logo }) {
    return (
        <>
<<<<<<< HEAD
            <span className="League_Logo">
=======
            <span className="League_Name">
>>>>>>> branch_1
                {logo && <Image src={logo} width={25} height={25} alt="logo" />}{' '}
                {name}
            </span>
        </>
    );
}
