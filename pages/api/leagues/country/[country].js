const fetchData = async (country) => {
  const response = await fetch(
    `https://api-football-v1.p.rapidapi.com/v3/leagues?search=${country}`,
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
  const { country } = req.query;
  const response = await fetchData(country);

  res.status(200).json(response);
}
