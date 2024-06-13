import React from 'react';
import { buttons } from '../table';

export default function StatButtons({ handleClick }) {
    return (
        <>
            <div className="Buttons">
                {buttons.map((button) => {
                    return (
                        <button key={button} onClick={(e) => handleClick(e)}>
                            {button}
                        </button>
                    );
                })}
            </div>
        </>
    );
}
