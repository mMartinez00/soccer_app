import React from 'react';

export default function Form({ form }) {
    const formatGameResults = function (form) {
        return (
            form &&
            form.split('').map((value, index) => {
                let className =
                    value === 'W' ? 'Won' : value === 'L' ? 'Lost' : 'Draw';

                if (form && form > 1) {
                    return (
                        <span key={index} className={className}>
                            {value}
                        </span>
                    );
                }

                return (
                    <>
                        <span key={index} className={className}>
                            {value}
                        </span>
                    </>
                );
            })
        );
    };

    return <p className="Form">{formatGameResults(form)}</p>;
}
