import React from "react";
import axios from "axios";
import { useLoaderData } from "react-router-dom";

const baseUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const loader = async () => {
  const searchTerm = "margarita";
  const res = await axios.get(`${baseUrl}${searchTerm}`);
  console.log("res", res);
  return { drinks: res.data.drinks, searchTerm };
};

const LandingView = () => {
  const { drinks, searchTerm } = useLoaderData();
  return (
    <div>
      <h2>Landing View</h2>
    </div>
  );
};

export default LandingView;
