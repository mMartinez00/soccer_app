import React from 'react'
import Image from "next/image";;
import useSWR from "swr";
import { useRouter } from "next/router";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function TeamFacts() {
  const router = useRouter();
  const { query } = router;
  const { data, error, isLoading } = useSWR( 
    `/api/team/id/${query.teamId}`  ,
    fetcher
  );

  const name = data ? data.response[0].team.name : null;
  const id = data ? data.response[0].team.id : null;
  const logo = data ? data.response[0].team.logo : null;
  const country = data ? data.response[0].team.country : null;
  const founded = data ? data.response[0].team.founded : null;
  const code = data ? data.response[0].team.code : null;
  const city = data ? data.response[0].venue.city : null;
  const address = data ? data.response[0].venue.address : null;
  const capacity = data ? data.response[0].venue.capacity : null;
  const venueName = data ? data.response[0].venue.name : null;
  const venueImg = data ? data.response[0].venue.image : null;

  if (isLoading)
    return (
      <>
        <h1>Loading...</h1>
      </>
    );

  return (
    <div>
      <p className="team">
        Team:
        <span className="image">
          <Image src={logo} width={100} height={100} alt="logo" priority />
        </span>
        {name}
      </p>
      {code ? (
        <>
          <p>Code: {code}</p>
        </>
      ) : null}
      <p className="founded">Founded: {founded}</p>
      <p className="country">
        Based in: {city}, {country}
      </p>
      <p className="venue">
        Venue: {venueName}{" "}
        <span>
          <Image src={venueImg} width={100} height={100} alt="venue" priority />
        </span>
        Capacity: {capacity.toLocaleString()}
      </p>
      {address ? (
        <>
          <p className="address">
            Address: {address}, {city}, {country}
          </p>
        </>
      ) : null}

    </div>
  )
}
