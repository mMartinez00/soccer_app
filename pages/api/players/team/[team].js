const fetchData = async (query) => {
    // const response = await fetch(
    //     `https://api-football-v1.p.rapidapi.com/v3/players?season=${query.season}&team=33`,
    //     {
    //         method: 'GET',
    //         headers: {
    //             'X-RapidAPI-Key': process.env.API_KEY,
    //             'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
    //         },
    //     }
    // );

    // const data = await response.json();

    // return data;
    return query;
};

export default async function handler(req, res) {
    const { query } = req;
    const response = await fetchData(query);

    res.status(200).json(response);
}
