import React from 'react';

export default function Tackles({ tackles }) {
    return (
        <>
            <div className="Tackles">
                <p className="Total">Tackles : {tackles.total}</p>
                <p className="Blocks">Blocks: {tackles.blocks}</p>
                <p className="Interceptions">
                    Interceptions: {tackles.interceptions}
                </p>
            </div>
        </>
    );
}
