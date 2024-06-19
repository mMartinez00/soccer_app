const fetchTest = async () => {
    // const response1 = await fetch(
    //   `https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all`,
    //   {
    //     method: "GET",
    //     headers: {
    //       "X-RapidAPI-Key": process.env.API_KEY,
    //       "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    //     },
    //   }
    // );

    const response2 = await fetch(
        `https://api-football-v1.p.rapidapi.com/v3/fixtures?timezone=America/New_York&date=2023-10-22`,
        {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.API_KEY,
                'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
            },
        }
    );

    // const allPromises = await Promise.all([response1, response2]);

    // const data1 = await allPromises[0].json();
    // const data2 = await allPromises[1].json();

    // return { data1, data2 };

    return response2.json();
};

export default async function handler(req, res) {
    const response = await fetchTest();

    res.status(200).json(response);
}
