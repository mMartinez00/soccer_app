// const fetchData = async (season, id) => {
//   const response = await fetch(
//     `https://api-football-v1.p.rapidapi.com/v3/leagues?season=${season}&id=${id}`,
//     {
//       method: "GET",
//       headers: {
//         "X-RapidAPI-Key": process.env.API_KEY,
//         "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
//       },
//     }
//   );

//   const data = await response.json();

//   return data;
// };
const fetchData = async (season, id) => {
  const response = await fetch(
    `https://api-football-v1.p.rapidapi.com/v3/leagues?season=2018&id=80`,
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
  const { season, id } = req.query;
  const response = await fetchData(season, id);

  res.status(200).json(response);
}
