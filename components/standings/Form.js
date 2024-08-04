import React from 'react';

export default function Form({ form }) {
    // console.log(form);
    // const a = function(form) {
    //     if (form && form.length > 1) return form.split('').map((value) => value);

    // }
    const a = function (form) {
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
                        <span className={className}>{value}</span>
                    </>
                );
            })
        );
    };

    // console.log(a(form));

    return (
        <>
            <span className="Form">{a(form)}</span>
        </>
    );
}
