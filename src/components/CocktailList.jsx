import React from "react";
import CocktailCard from "./CocktailCard";
import Wrapper from "../assets/wrappers/CocktailList";

const CocktailList = ({ drinks }) => {
  //   console.log("drinks", drinks);
  const formattedDrinks = drinks.map((drink) => {
    const { idDrink, strdrink, strDrinkThumb, strAlcoholic, strGlass } = drink;
    return {
      id: idDrink,
      name: strdrink,
      image: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
    };
  });
  if (!drinks) {
    return <h3 style={{ textAlign: "center" }}>No drinks available</h3>;
  }
  return (
    <Wrapper>
      {formattedDrinks.map((drink) => (
        <CocktailCard key={drink.id} drink={drink} />
      ))}
    </Wrapper>
  );
};

export default CocktailList;
