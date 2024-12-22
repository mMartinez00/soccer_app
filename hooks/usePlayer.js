import useSWR from 'swr';
import { fetcher } from '@/utils/utils';

export default function usePlayer(playerID, season) {
    const { data, isLoading, error } = useSWR(
        `/api/players/season/players?id=${playerID}&season=${season}`,
        fetcher
    );

    return {
        data,
        isLoading,
        isError: error,
    };
}
