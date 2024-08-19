import React from "react";

export default function Heading(props) {
  return (
    <>
      <h1>{props.titleText}</h1>
      <p>{props.firstDescription}</p>
    </>
  );
}
