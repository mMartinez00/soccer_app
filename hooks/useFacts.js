import useSWR from 'swr';
import { fetcher } from '@/utils/utils';

export default function useFacts(teamID) {
    const { data, error, isLoading } = useSWR(
        `/api/team/id/${teamID}`,
        fetcher
    );

    return {
        facts: data && data.response[0],
        isLoading,
        isError: error,
    };
}
