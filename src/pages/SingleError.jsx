import React from "react";
import { useRouteError } from "react-router-dom";
const SingleError = () => {
  const error = useRouteError();
  console.log("error", error);
  return (
    <div>
      <h2>{error.message}</h2>
    </div>
  );
};

export default SingleError;
