const fetchData = async (league, team, season) => {
  const response = await fetch(
    `https://api-football-v1.p.rapidapi.com/v3/statistics?league=${league}&team=${team}&season=${season}`,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.API_KEY,
        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
      },
    }
  );

  const data = await response.json();

  return data;
};

export default async function handler(req, res) {
  const { league, team, season } = req.query;
  const response = await fetchData(league, team, season);

  res.status(200).json(response);
}
