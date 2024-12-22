const getCurrentDate = () => {
    const today = new Date();
    const locale = 'en-US';
    const options = {
        timeZone: 'America/New_York',
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
    };
    const [month, day, year] = new Intl.DateTimeFormat(locale, options)
        .format(today)
        .split('/');

    return `${year}-${month}-${day}`;
};

async function fetchData() {
    const response = await fetch(
        `https://api-football-v1.p.rapidapi.com/v3/fixtures?date=${getCurrentDate()}`,
        {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.API_KEY,
                'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
            },
        }
    );

    const data = await response.json();

    return data;
}

export default async function handler(req, res) {
    const response = await fetchData();

    res.status(200).json(response);
}
