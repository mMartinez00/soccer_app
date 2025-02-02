
# Soccer App

This is a simple soccer app built with Next.js that displays soccer game data using the [API-Football](https://www.api-football.com/) API. The app features dynamic routing, a sleek UI with smooth transitions, and a responsive layout.

## Features

- Fetches live soccer game data from [API-Football](https://www.api-football.com/).
- Displays a list of games with their details, such as team names, scores, and match status.
- **Intersection Observer** API used for lazy-loading components when they come into view.
- **SASS** used for styling, ensuring a clean and organized stylesheet.
- Smooth transitions and carousels powered by **Keen Slider**.
- Mock data used for development via **JSON Server**.
- **SWR** used for data fetching and caching.

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/soccer-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd soccer-app
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Set up the `.env` file for your environment variables:
   ```bash
   API_KEY=your_api_key
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app in action.

## Pages and Dynamic Routing
In this app, dynamic routing is used to display details for soccer players, teams, and standings. The app uses Next.js's file-based routing system with dynamic routes for each entity.

## File Structure
```
/pages
  /player
    /[player].js           - A dynamic route for displaying detailed information about a specific player.
  /standings
    /[standings].js        - A dynamic route for displaying the standings of a specific league or team.
  /team
    /[team].js             - A dynamic route for displaying detailed information about a specific team.
```

## Dynamic Routes
- [pages/player/[player].js](pages/player/[player].js): Displays detailed information about a specific player. The players ID is used in the URL to fetch and display data for the player.
- [pages/standings/[standings].js](pages/player/[player].js): Displays standings data for a specific league.
- [pages/team/[team].js](pages/player/[player].js): Displays detailed information about a specfic teams. The team’s ID is used in the URL to fetch and display data for that team.

Next.js’s file-based routing system allows dynamic routing based on the file structure. In this app, each of the ```[player].js```, ```[standings].js```, and ```[team].js``` files in their respective folders are used to handle the dynamic display of content for players, standings, and teams.

## Technologies Used

- **Next.js** – A React framework for building static and dynamic web apps.
- **JSON Server** – A full fake REST API with zero coding required for mock data during development.
- **Keen Slider** – A lightweight and customizable carousel slider.
- **SASS** – A preprocessor for writing more maintainable and modular CSS.
- **SWR** – A React hook for data fetching with caching, revalidation, focus tracking, and refetching.

## API Used

- **API-Football**: Provides real-time data about soccer games, teams, leagues, and more. This app uses the API to fetch live soccer match data. 

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
