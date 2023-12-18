import React from "react";
import Country from "./Country";
import League from "./League";
import styles from "@/styles/LeagueHeader.module.css";
import { useRouter } from "next/router";

export default function LeagueHeader({ league }) {
  // if the flag & logo property does not have a value refer to: https://github.com/vercel/next.js/discussions/29545
  const router = useRouter();

  return (
    <div
      onClick={() =>
        router.push({
          pathname: `/standings/${league.name}`,
          query: { id: `${league.id}`, season: `${league.season}` },
        })
      }
      className={styles.League}
    >
      <Country country={league.country} flag={league.flag} /> -
      <League name={league.name} logo={league.logo} />
    </div>
  );
}
