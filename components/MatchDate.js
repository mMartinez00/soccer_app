import React from 'react';

export default function MatchDate() {
    const date = new Date();

    return (
        <div className="Match__Date">
            <h4 className="Date">{date.toDateString()}</h4>
        </div>
    );
}
