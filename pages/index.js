import Head from 'next/head';
import Fixtures from '@/components/Fixtures';
import { useEffect } from 'react';

export const getServerSideProps = async () => {
    let today = new Date().toISOString().split('T')[0];

    const response1 = await fetch(
        `https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all`,
        {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.API_KEY,
                'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
            },
        }
    );

    const response2 = await fetch(
        `https://api-football-v1.p.rapidapi.com/v3/fixtures?timezone=America/New_York&date=${today}`,
        {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.API_KEY,
                'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
            },
        }
    );

    const allPromises = await Promise.all([response1, response2]);

    const live = await allPromises[0].json();

    const all = await allPromises[1].json();

    return {
        props: {
            live: live.response,
            all: all.response,
        },
    };
};

export default function Home({ live, all }) {
    function groupFixturesByLeague(array) {
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

    const liveGames = groupFixturesByLeague(live);
    const allGames = groupFixturesByLeague(all);

    return (
        <>
            <Head>
                <title>Soccer App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Fixtures all={allGames} live={liveGames} />
        </>
    );
}
