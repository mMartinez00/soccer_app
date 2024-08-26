import React from 'react';
import { buttons } from '../table';

export default function StatButtons({ handleClick }) {
    return (
        <>
            <div className="Statistics_Buttons">
                {buttons.map((button, index) => {
                    return (
                        <button
                            className={`Button ${button}_Button ${
                                index === 0 ? 'Active' : ''
                            }`}
                            key={button}
                            onClick={(e) => handleClick(e)}
                        >
                            {button}
                        </button>
                    );
                })}
            </div>
        </>
    );
}
