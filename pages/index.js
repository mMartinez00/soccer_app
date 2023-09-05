import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Fixtures from "@/components/Fixtures";

export const getServerSideProps = async () => {
  const response = await fetch(
    `https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all`,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.API_KEY,
        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
      },
    }
  );

  const data = await response.json();

  return {
    props: { data },
  };
};

export default function Home({ data }) {
  const [content, setContent] = useState(data);

  return (
    <>
      <Head>
        <title>Soccer App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Fixtures data={content} />
    </>
  );
}
