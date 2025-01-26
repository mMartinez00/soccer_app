import React from 'react';

export default function InputText({ inputValue, handleInputChange }) {
    return (
        <>
            <input
                type="text"
                onChange={handleInputChange}
                value={inputValue}
                placeholder="Search for matches"
            />
        </>
    );
}
