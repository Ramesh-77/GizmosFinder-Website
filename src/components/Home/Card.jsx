import { CardList } from "./CardList";
const Card = ({
  pname,
  pprice,
  pdesc,
  pqty,
  name,
  phone,
  email,
  categoryName,
  image,
}) => {
  return (
    <>
      <div className="card shadow-lg" style={{maxHeight: "44vh"}}>
        <CardList
          pname={pname}
          pprice={pprice}
          pdesc={pdesc}
          pqty={pqty}
          name={name}
          phone={phone}
          email={email}
          categoryName={categoryName}
          image={image}
        />
      </div>
    </>
  );
};
export default Card;
