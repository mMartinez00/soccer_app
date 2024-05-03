import React from 'react';

export default function StatButtons({ stats }) {
    function handleClick(e) {
        stats = e.target.innerText;
        // console.log(stats);
        // console.log(e.target.innerText);
    }
    return (
        <>
            <div className="Buttons">
                <button onClick={handleClick}>General</button>
                <button onClick={handleClick}>Attacking</button>
                <button onClick={handleClick}>Defending</button>
            </div>
        </>
    );
}
