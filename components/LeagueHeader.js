import React from "react";
import Link from "next/link";

export default function LeagueHeader({ children }) {
  return (
    <>
      <h1 className="Header">{children}</h1>
    </>
  );
}
