import React from "react";
export const CardList = ({
  pname,
  pprice,
  image,
}) => {
  return (
    <>
      <div className="product-img">
        <img
          src={"http://localhost:5000/" + image}
          alt=""
          className="img-fluid p-2"
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            width: "50%",
          }}
        />
      </div>
      <div className="card-body text-center">
        <p>{pname}</p>
        <span className="text-success fw-bold">Rs. {pprice}</span>
      </div>
      <div className="d-flex flex-row justify-content-between gap-2 p-3 bg-white shadow-lg" style={{borderRadius: "10px"}}>
        <button className="btn btn-primary w-75" style={{backgroundColor: "#3a0ca3"}}>View Details</button>
        <span >
        {/* <i className="fa-solid fa-heart fa-2x" style={{cursor: "pointer"}}></i> */}
        <i className="bi bi-heart fa-2x" style={{cursor: "pointer"}}></i>
        </span>
      </div>
    </>
  );
};
