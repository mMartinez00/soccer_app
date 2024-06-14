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

export function groupedByTeam(statistics) {
    return statistics.reduce((a, b) => {
        const team = b.team.name;
        if (!a[team]) {
            a[team] = [];
        }

        a[team].push(b);
        return a;
    }, {});
}
