import React from "react";
import Wrapper from "../assets/wrappers/CocktailPage";
import axios from "axios";

import { useLoaderData, Link } from "react-router-dom";
const cocktailUrl = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=`;

export const loader = async ({ params }) => {
  const { id } = params;
  const { data } = await axios.get(`${cocktailUrl}${id}`);

  return { id, data };
};
const CocktailView = () => {
  const { id, data } = useLoaderData();

  if (!data) {
    return (
      <Wrapper>
        <Link to="/" className="btn">
          Back home
        </Link>
        <h2>Something went wrong...</h2>
      </Wrapper>
    );
  }
  const drink = data.drinks[0];

  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
    strIngredient1: base,
  } = drink;

  const validIngredients = Object.keys(drink)
    .filter((key) => key.startsWith("strIngredient") && drink[key] !== null)
    .map((key) => drink[key]);

  return (
    <Wrapper>
      <header>
        <Link to="/" className="btn">
          Back Home
        </Link>
        <h3>{name}</h3>
      </header>
      <div className="drink">
        <img src={image} alt={name} className="img" />
        <div className="drink-info">
          <p>
            <span className="drink-data">Name:</span>
            {name}
          </p>
          <p>
            <span className="drink-data">Category:</span>
            {category}
          </p>
          <p>
            <span className="drink-data">Glass:</span>
            {glass}
          </p>
          <p>
            <span className="drink-data">Instructions:</span>
            {instructions}
          </p>
          <p>
            <span className="drink-data">Ingredients:</span>
            {validIngredients.map((item, idx) => {
              return (
                <span className="ing" key={item}>
                  {item}
                  {idx < validIngredients.length - 1 ? "," : ""}
                </span>
              );
            })}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default CocktailView;
