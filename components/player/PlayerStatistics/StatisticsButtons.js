import React from 'react';
import { statisticsButtons } from '../table';

export default function StatisticsButtons({ handleButtonCLick, activeButton }) {
    return (
        <div>
            {statisticsButtons.map((button, index) => (
                <button
                    className={`Button ${
                        activeButton === index ? 'Active' : ''
                    }`}
                    onClick={() => handleButtonCLick(button, index)}
                >
                    {button}
                </button>
            ))}
        </div>
    );
}
