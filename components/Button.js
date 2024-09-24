import React from 'react';

export default function Button({ type, children, handleClick, index }) {
    return (
        <>
            <button onClick={(e) => handleClick(e, index)}>{children}</button>
        </>
    );
}
