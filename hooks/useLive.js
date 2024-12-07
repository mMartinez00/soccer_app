import useSWR from 'swr';
import { fetcher } from '@/utils/utils';

export default function useLive() {
    const { data, isLoading, error } = useSWR(`/api/fixtures/live`, fetcher);

    return {
        liveGames: data?.response,
        isLoading,
        isError: error,
    };
}
