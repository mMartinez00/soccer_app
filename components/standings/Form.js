import React from "react";

export default function Form({ form }) {

  if(form && form.length > 1) return form.split("").map(value => value);

  return (
    <>
      {form}
    </>
  );
}
