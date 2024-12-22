import useSWR from 'swr';
import { fetcher } from '@/utils/utils';

export default function useStatistics(team, teamID, leagueID, season) {
    const { data, error, isLoading } = useSWR(
        `/api/team/statistics/${team}?teamId=${teamID}&leagueId=${leagueID}&season=${season}`,
        fetcher
    );

    return {
        statistics: data && data.response,
        isLoading,
        isError: error,
    };
}
