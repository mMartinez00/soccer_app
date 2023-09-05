import React from "react";
import Competition from "./Competition";

export default function Fixtures({ data }) {
  return (
    <>
      {data &&
        data.response.map((fixture) => {
          return <Competition key={fixture.id} fixture={fixture} />;
        })}
    </>
  );
}
