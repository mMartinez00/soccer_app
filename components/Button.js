import React from 'react';

export default function Button({ children, handleClick, className }) {
    return (
        <button className={className} onClick={handleClick}>
            {children}
        </button>
    );
}
