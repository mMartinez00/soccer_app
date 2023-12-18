import React from "react";
import Image from "next/image";

export default function League({ name, logo }) {
  return (
    <div>
      <p className="League_Logo">
        {logo && <Image src={logo} width={25} height={25} alt="logo" />} {name}
      </p>
    </div>
  );
}
