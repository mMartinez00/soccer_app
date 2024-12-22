import useSWR from 'swr';
import { fetcher } from '@/utils/utils';

export default function useFixtures() {
    const { data, isLoading, error } = useSWR(
        `/api/fixtures/fixtures`,
        fetcher
    );

    return {
        data,
        isLoading,
        isError: error,
    };
}
