const extractDigits = (string) => string.match(/\d+/gm);

export function cmToFeet(cm) {
    const digit = extractDigits(cm);
    const inches = +digit[0] / 2.54;
    const feet = Math.floor(inches / 12);
    const remainingInches = inches % 12;

    return `${feet}ft ${Math.round(remainingInches)}in`;
}

export function kgToPounds(kg) {
    const digit = extractDigits(kg);
    const pounds = +digit[0] * 2.205;

    return `${Math.round(pounds)}lbs`;
}

export function convertNullToZero(value) {
    return value === null ? (value = 0) : value;
}
