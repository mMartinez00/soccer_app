import Head from 'next/head';
import { useMemo, useState } from 'react';
import useLive from '@/hooks/useLive';
import useFixtures from '@/hooks/useFixtures';
import MatchList from '@/components/fixtures/MatchList';
import Loading from '@/components/Loading';
import Button from '@/components/Button';
import MatchDate from '@/components/MatchDate';
import InputText from '@/components/InputText';
import { groupMatchesByLeague, debounce, filtered } from '@/utils/utils';

export default function Home() {
    const [showLive, setShowLive] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [debouncedInput, setDebouncedInput] = useState('');
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
    const debounceHandleInputChange = debounce((value) => {
        setDebouncedInput(value);
    }, 300);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        debounceHandleInputChange(value);
    };
    const isLoading = loadingLive || loadingAll;

    const displayedMatches = useMemo(() => {
        const matches = showLive ? liveMatches : allMatches;

        return filtered(debouncedInput, matches);
    }, [showLive, liveMatches, allMatches, debouncedInput]);

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
