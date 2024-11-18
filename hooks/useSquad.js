import useSWR from 'swr';
import { fetcher } from '@/utils/utils';

export default function useSquad(teamID) {
    const { data, isLoading, error } = useSWR(
        `/api/team/squads/${teamID}`,
        fetcher
    );

    return {
        data,
        isLoading,
        isError: error,
    };
}
