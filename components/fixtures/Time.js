import React from 'react';

export default function Time({ time }) {
    return (
        <span className="Time">
            {time.short && time.short}{' '}
            {time.elapsed ? time.elapsed + "'" : null}
        </span>
    );
}
