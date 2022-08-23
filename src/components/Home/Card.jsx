import pimg from "../../Images/ragnor-lothbrok.jpg";
import { CardList } from "./CardList";
const Card = ({name, price, category, ratings}) => {
  return (
    <>
      <div className="card shadow-lg">
        <CardList pimg={pimg} name={name}  price={price} category={category} ratings={ratings}/>
      </div>
    </>
  );
};
export default Card;
