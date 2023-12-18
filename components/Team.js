import React from "react";
import Image from "next/image";

export default function Team({ team }) {
  return (
    <div className="Team">
      <Image src={team && team.logo} width={25} height={25} alt="logo" />{" "}
      <span className="Team_Name">{team.name}</span>
    </div>
  );
}
