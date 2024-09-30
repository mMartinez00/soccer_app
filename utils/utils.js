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

export function groupFixturesByLeague(array) {
    const groupedFixtures = array
        .sort((a, b) => {
            const leagueA = a.league.country.toUpperCase();
            const leagueB = b.league.country.toUpperCase();

            return leagueA > leagueB ? 1 : leagueA < leagueB ? -1 : 0;
        })
        .reduce((a, b) => {
            const key = `${b.league.country} - ${b.league.name}`;
            if (!a[key]) {
                a[key] = [];
            }

            a[key].push(b);

            return a;
        }, {});

    return groupedFixtures;
}

export function groupedByTeam(array) {
    return (
        array &&
        array.reduce((a, b) => {
            const team = b.team.name;
            if (!a[team]) {
                a[team] = [];
            }

            a[team].push(b);
            return a;
        }, {})
    );
}

export const fetcher = (...args) => fetch(...args).then((res) => res.json());

export function totalCards(cards) {
    const sumOfCards = Object.values(cards).reduce(
        (accumulator, currentValue) => {
            currentValue.total === null
                ? (currentValue.total = 0)
                : currentValue.total;

            return accumulator + currentValue.total;
        },
        0
    );

    return (
        <>
            <strong>{sumOfCards}</strong>
        </>
    );
}

export function filterPosition(array, position) {
    return array && array.filter((player) => player.position === position);
}

export function filterObj(stat, typeOfData) {
    const keys = Object.keys(stat);

    const filtered = keys
        .filter((key) => {
            if (typeOfData.includes(key)) {
                return stat[key];
            }
        })
        .reduce((object, key) => {
            return Object.assign(object, {
                [key]: stat[key],
            });
        }, {});

    return filtered;
}

export function toggleActiveClass(e) {
    const buttons = e.target.parentElement.childNodes;

    buttons.forEach((el) => el.classList.remove('Active'));

    e.target.className += e.target.className.includes('Active')
        ? ''
        : ' Active';
}
