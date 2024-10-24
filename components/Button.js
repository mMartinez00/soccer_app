import React from 'react';

export default function Button({
    type,
    children,
    handleClick,
    index,
    isActive,
}) {
    return (
        <>
            <button
                className={`Button Button-${type} ${isActive ? 'Active' : ''} ${
                    index === 0 ? 'Active' : ''
                }`}
                onClick={(e) => handleClick(e, index)}
            >
                {children}
            </button>
        </>
    );
}
