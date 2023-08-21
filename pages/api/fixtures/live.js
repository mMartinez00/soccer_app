const fetchData = async () => {
  const response = await fetch(
    `https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all`,
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
  const response = await fetchData();

  res.status(200).json(response);
}
