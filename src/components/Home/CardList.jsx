import React from "react";
export const CardList = ({ pimg, name, price, category, ratings }) => {
  return (
    <>
      <div className="product-img">
        <img src={pimg} alt="" className="img-fluid" />
      </div>
      <div className="card-body text-center">
        <p>{name}</p>
        <span>{price}</span>
        <br />
        <span>{category}</span>
        <br />
        <span>{ratings}</span>
      </div>
      <div className="view-details-favourite-btns d-flex flex-row justify-content-around">
        <button className="btn btn-primary">View Details</button>
        <span className="btn btn-danger">ICons</span>
      </div>
    </>
  );
};
