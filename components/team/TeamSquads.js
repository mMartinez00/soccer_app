import React from 'react'
import useSWR from 'swr'
import { useRouter } from 'next/router';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function TeamSquads() {
  const router = useRouter();
  const { query } = router;
  const { data, error, isLoading } = useSWR( 
    `/api/team/squads/${query.teamId}`  ,
    fetcher
  );

  // data && console.log(data)

  return (
    <div>Team Squads</div>
  )
}
