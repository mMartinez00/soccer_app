import useSWR from 'swr';
import { fetcher } from '@/utils/utils';

export default function useStandings(league, leagueID, season) {
    const { data, error, isLoading } = useSWR(
        `/api/standings/league/${league}?leagueId=${leagueID}&season=${season}`,
        fetcher
    );

    return {
        data,
        isLoading,
        isError: error,
    };
}
