import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/CocktailCard";
const CocktailCard = ({ drink }) => {
  const { id, name, glass, image, info } = drink;
  console.log("drink", glass);
  return (
    <Wrapper>
      <div className="image-container">
        <img src={image} className="img" />
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{glass}</h5>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className="btn">
          Go to Cocktail
        </Link>
      </div>
    </Wrapper>
  );
};

export default CocktailCard;
