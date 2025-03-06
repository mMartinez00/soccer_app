import React from 'react';

export default function Form({ form }) {
    const formatGameResults = function (form) {
        if (!form) return null;

        if (form.length > 1) {
            return form.split('').map((value, index) => {
                let className =
                    value === 'W' ? 'Won' : value === 'L' ? 'Lost' : 'Draw';

                return (
                    <span key={`${value}-${index}`} className={className}>
                        {console.log(`${value}-${index}`)}
                        {value}
                    </span>
                );
            });
        }

        return (
            <span
                className={
                    form === 'W' ? 'Won' : value === 'L' ? 'Lost' : 'Draw'
                }
            >
                {form}
            </span>
        );
    };

    return <p className="Form">{formatGameResults(form)}</p>;
}
