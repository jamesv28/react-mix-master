import React from "react";
import Wrapper from "../assets/wrappers/ErrorPage";
import { Link, useRouteError } from "react-router-dom";
import img from "../assets/not-found.svg";
const ErrorView = () => {
  const error = useRouteError();
  console.log("err", error);
  if (error.status == 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} />
          <h3>Not found</h3>
          <p>We can't seem to find the view you are looking for</p>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <img src={img} />
    </Wrapper>
  );
};

export default ErrorView;
