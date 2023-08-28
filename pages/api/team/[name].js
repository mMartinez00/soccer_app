const fetchData = async (name) => {
  const response = await fetch(
    `https://api-football-v1.p.rapidapi.com/v3/teams?name=${name}`,
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
  const { name } = req.query;
  const response = await fetchData(name);

  res.status(200).json(response);
}
