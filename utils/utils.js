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
    e.target.parentElement.childNodes.forEach((el) =>
        el.classList.remove('Active')
    );

    e.target.className += e.target.className.includes('Active')
        ? ''
        : ' Active';
}

export const playerStatisticsArray = [
    {
        team: {
            id: 121,
            name: 'Palmeiras',
            logo: 'https://media.api-sports.io/football/teams/121.png',
        },
        league: {
            id: 475,
            name: 'Paulista - A1',
            country: 'Brazil',
            logo: 'https://media.api-sports.io/football/leagues/475.png',
            flag: 'https://media.api-sports.io/flags/br.svg',
            season: 2023,
        },
        games: {
            appearences: 14,
            lineups: 14,
            minutes: 1260,
            number: null,
            position: 'Defender',
            rating: '7.183333',
            captain: false,
        },
        substitutes: {
            in: 0,
            out: 0,
            bench: 0,
        },
        shots: {
            total: 6,
            on: null,
        },
        goals: {
            total: 0,
            conceded: 0,
            assists: 1,
            saves: null,
        },
        passes: {
            total: 564,
            key: 2,
            accuracy: 39,
        },
        tackles: {
            total: 15,
            blocks: 10,
            interceptions: 19,
        },
        duels: {
            total: 105,
            won: 58,
        },
        dribbles: {
            attempts: 2,
            success: null,
            past: null,
        },
        fouls: {
            drawn: 5,
            committed: 15,
        },
        cards: {
            yellow: 1,
            yellowred: 0,
            red: 0,
        },
        penalty: {
            won: null,
            commited: null,
            scored: 0,
            missed: 0,
            saved: null,
        },
    },
    {
        team: {
            id: 121,
            name: 'Palmeiras',
            logo: 'https://media.api-sports.io/football/teams/121.png',
        },
        league: {
            id: 71,
            name: 'Serie A',
            country: 'Brazil',
            logo: 'https://media.api-sports.io/football/leagues/71.png',
            flag: 'https://media.api-sports.io/flags/br.svg',
            season: 2023,
        },
        games: {
            appearences: 32,
            lineups: 32,
            minutes: 2763,
            number: null,
            position: 'Defender',
            rating: '6.993750',
            captain: false,
        },
        substitutes: {
            in: 0,
            out: 1,
            bench: 0,
        },
        shots: {
            total: 21,
            on: 6,
        },
        goals: {
            total: 2,
            conceded: 0,
            assists: 3,
            saves: null,
        },
        passes: {
            total: 1654,
            key: 12,
            accuracy: 43,
        },
        tackles: {
            total: 60,
            blocks: 12,
            interceptions: 29,
        },
        duels: {
            total: 321,
            won: 194,
        },
        dribbles: {
            attempts: 5,
            success: 4,
            past: null,
        },
        fouls: {
            drawn: 23,
            committed: 37,
        },
        cards: {
            yellow: 10,
            yellowred: 0,
            red: 2,
        },
        penalty: {
            won: null,
            commited: null,
            scored: 0,
            missed: 0,
            saved: null,
        },
    },
    {
        team: {
            id: 121,
            name: 'Palmeiras',
            logo: 'https://media.api-sports.io/football/teams/121.png',
        },
        league: {
            id: 73,
            name: 'Copa Do Brasil',
            country: 'Brazil',
            logo: 'https://media.api-sports.io/football/leagues/73.png',
            flag: 'https://media.api-sports.io/flags/br.svg',
            season: 2023,
        },
        games: {
            appearences: 5,
            lineups: 5,
            minutes: 450,
            number: null,
            position: 'Defender',
            rating: '6.825000',
            captain: false,
        },
        substitutes: {
            in: 0,
            out: 0,
            bench: 0,
        },
        shots: {
            total: 2,
            on: 1,
        },
        goals: {
            total: 1,
            conceded: 0,
            assists: null,
            saves: null,
        },
        passes: {
            total: 181,
            key: null,
            accuracy: 35,
        },
        tackles: {
            total: 3,
            blocks: 3,
            interceptions: 3,
        },
        duels: {
            total: 27,
            won: 14,
        },
        dribbles: {
            attempts: null,
            success: null,
            past: null,
        },
        fouls: {
            drawn: 2,
            committed: 6,
        },
        cards: {
            yellow: 1,
            yellowred: 0,
            red: 0,
        },
        penalty: {
            won: null,
            commited: null,
            scored: 0,
            missed: 0,
            saved: null,
        },
    },
    {
        team: {
            id: 121,
            name: 'Palmeiras',
            logo: 'https://media.api-sports.io/football/teams/121.png',
        },
        league: {
            id: 13,
            name: 'CONMEBOL Libertadores',
            country: 'World',
            logo: 'https://media.api-sports.io/football/leagues/13.png',
            flag: null,
            season: 2023,
        },
        games: {
            appearences: 11,
            lineups: 11,
            minutes: 990,
            number: null,
            position: 'Defender',
            rating: '7.318181',
            captain: false,
        },
        substitutes: {
            in: 0,
            out: 0,
            bench: 0,
        },
        shots: {
            total: 11,
            on: 9,
        },
        goals: {
            total: 3,
            conceded: 0,
            assists: 1,
            saves: null,
        },
        passes: {
            total: 512,
            key: 5,
            accuracy: 38,
        },
        tackles: {
            total: 16,
            blocks: 7,
            interceptions: 9,
        },
        duels: {
            total: 102,
            won: 63,
        },
        dribbles: {
            attempts: 3,
            success: 1,
            past: null,
        },
        fouls: {
            drawn: 9,
            committed: 14,
        },
        cards: {
            yellow: 4,
            yellowred: 0,
            red: 0,
        },
        penalty: {
            won: null,
            commited: null,
            scored: 0,
            missed: 0,
            saved: null,
        },
    },
    {
        team: {
            id: 2380,
            name: 'Paraguay',
            logo: 'https://media.api-sports.io/football/teams/2380.png',
        },
        league: {
            id: 10,
            name: 'Friendlies',
            country: 'World',
            logo: 'https://media.api-sports.io/football/leagues/10.png',
            flag: null,
            season: 2023,
        },
        games: {
            appearences: 2,
            lineups: 2,
            minutes: 180,
            number: null,
            position: 'Defender',
            rating: null,
            captain: false,
        },
        substitutes: {
            in: 0,
            out: 0,
            bench: 0,
        },
        shots: {
            total: null,
            on: null,
        },
        goals: {
            total: 0,
            conceded: null,
            assists: null,
            saves: null,
        },
        passes: {
            total: null,
            key: null,
            accuracy: null,
        },
        tackles: {
            total: null,
            blocks: null,
            interceptions: null,
        },
        duels: {
            total: null,
            won: null,
        },
        dribbles: {
            attempts: null,
            success: null,
            past: null,
        },
        fouls: {
            drawn: null,
            committed: null,
        },
        cards: {
            yellow: 1,
            yellowred: 0,
            red: 0,
        },
        penalty: {
            won: null,
            commited: null,
            scored: null,
            missed: null,
            saved: null,
        },
    },
];
