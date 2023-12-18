import React from "react";

export default function Form({ form }) {
  const formArray = form.split("");

  return (
    <>
      {formArray &&
        formArray.map((value) => {
          return value;
        })}
    </>
  );
}
