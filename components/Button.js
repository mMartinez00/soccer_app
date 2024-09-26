import React from 'react';

export default function Button({ type, children, handleClick, index }) {
    const className = `Button ${type} ${index === 0 ? 'Active ' : ''}`;
    return (
        <>
            <button
                className={className}
                onClick={(e) => handleClick(e, index)}
            >
                {children}
            </button>
        </>
    );
}
