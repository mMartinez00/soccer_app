import Head from 'next/head';
import { useMemo, useState } from 'react';
import useLive from '@/hooks/useLive';
import useFixtures from '@/hooks/useFixtures';
import MatchList from '@/components/fixtures/MatchList';
import Loading from '@/components/Loading';
import Button from '@/components/Button';
import MatchDate from '@/components/MatchDate';
import InputText from '@/components/InputText';
import { groupMatchesByLeague } from '@/utils/utils';

export default function Home() {
    const [showLive, setShowLive] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const { data: liveData, isLoading: loadingLive } = useLive();
    const { data: fixturesData, isLoading: loadingAll } = useFixtures();
    const liveMatches = useMemo(
        () => groupMatchesByLeague(liveData?.response),
        [liveData?.response]
    );
    const allMatches = useMemo(
        () => groupMatchesByLeague(fixturesData?.response),
        [fixturesData?.response]
    );

    const handleClick = () => setShowLive((prev) => !prev);
    const handleInputChange = (e) => setInputValue(e.target.value);
    const isLoading = loadingLive || loadingAll;

    const filtered = function filterByValue(inputValue, matches) {
        if (!inputValue) return matches;

        const filteredMatches = {};

        Object.entries(matches).forEach(([leagueId, matches]) => {
            const filteredLeagueMatches = matches.filter((match) => {
                const league = match.league.name.toUpperCase();
                const country = match.league.country.toUpperCase();
                const homeTeam = match.teams.home.name.toUpperCase();
                const awayTeam = match.teams.away.name.toUpperCase();

                return (
                    league.includes(inputValue.toUpperCase()) ||
                    country.includes(inputValue.toUpperCase()) ||
                    homeTeam.includes(inputValue.toUpperCase()) ||
                    awayTeam.includes(inputValue.toUpperCase())
                );
            });

            if (filteredLeagueMatches.length > 0) {
                filteredMatches[leagueId] = filteredLeagueMatches;
            }
        });

        return filteredMatches;
    };

    const displayedMatches = useMemo(() => {
        const matches = showLive ? liveMatches : allMatches;

        return filtered(inputValue, matches);
    });

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

            <div className="Matches">
                <div className="Matches__Container">
                    <div className="Matches__Controls">
                        <Button
                            handleClick={() => handleClick()}
                            className={`Button Button-Toggle${
                                showLive ? ' Active' : ''
                            }`}
                        >
                            Live
                        </Button>
                        <InputText
                            inputValue={inputValue}
                            handleInputChange={handleInputChange}
                        />
                        <MatchDate />
                    </div>
                    {isLoading ? (
                        <Loading />
                    ) : (
                        <MatchList matches={displayedMatches} />
                    )}
                </div>
            </div>
        </>
    );
}
