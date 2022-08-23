import React from "react";
import { Link } from "react-router-dom";

const Dashboard = ({ user }) => {
  const style = {
    cursor: "pointer",
    padding: "10px",
    backgroundColor: "red",
    border: "none",
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: "1rem",
    borderRadius: "20px",
  };
  const goBackHomeStyle = {
    cursor: "pointer",
    padding: "10px",
    backgroundColor: "grey",
    border: "none",
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: "1rem",
    borderRadius: "20px",
  };
  return (
    <div>
      <h1>User Dashboard</h1>
      <div
        className="logout_div"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginLeft: "100px",
        }}
      >
        <div
          className="logout_username"
          style={{ display: "flex", gap: "10px" }}
        >
          {user ? (
            <>
              <div className="user_details">
                <span style={{ fontWeight: "bold", fontSize: "3rem" }}>
                  {/* {user.displayName} */}
                  fdkfkdj
                </span>
                {/* <button style={goBackHomeStyle}>Go To Home</button> */}
                <button style={style}>
                  Logout
                </button>
              </div>
              {/* <h1>Provider: {user.provider}</h1>
              <h1>Id: {user.id}</h1>
              <h1>kdkfdkfjkdkf</h1> */}

              {/* <img
                // src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg"
                src={user.photos[0].value}
                alt=""
                style={{ width: "200px", height: "200px", objectFit: "cover" }}
              /> */}
            </>
          ) : (
            <>
              <span style={{ fontWeight: "bold", fontSize: "3rem" }}>
                User is not logged in
              </span>
              <Link to="/">
                <button style={goBackHomeStyle}>Home</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
