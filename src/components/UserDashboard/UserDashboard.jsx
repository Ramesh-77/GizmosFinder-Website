import React from "react";
import bgImg from "../../Images/main.jpg";
import UserNavbar from "../UserDashboard/UserNavbar";
import userImg from "../../Images/ragnor-lothbrok.jpg"
const UserDashboard = ({userData}) => {
  // console.log(userData._id)
  function parseJwt(token) {
    if (!token) {
      return;
    }
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace("-", "+").replace("_", "/");
    return JSON.parse(window.atob(base64));
  }
  // get user form the token
  const token_data = localStorage.getItem("token");
  const token = parseJwt(token_data);
  // const userId = token?.user._id
//   const user = token?._id;
  // console.log(userData?.pic)



  // get user form the token

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    window.location = "/";
  };




  

  return (
    <>
      <div
        className="container-fluid homeImg"
        style={{
          paddingTop: 0,
          backgroundColor: "#ebebeb",
          background: `url(${bgImg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "30vh",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <UserNavbar />
      </div>
      <div className="bg-light container-fluid p-0">
        <div className="container col-md-8 py-4 mb-4">
          <p className="text text-center text-secondary fs-3 fw-bold">
            Customer Dashboard
          </p>
          <div className="d-flex justify-content-between align-items-center border p-3 rounded bg-white mb-3">
            <div className="desc">
              <p className="text text-primary fs-5">{token?.name}</p>
              <small className="d-block text-secondary mb-3">
                Enjoy your free membership for lifetime access in our website.
              </small>
              {/* <div className="d-flex justify-content-start align-items-center">
                <i
                  className="fa fa-check-circle me-2"
                  style={{ cursor: "pointer" }}
                ></i>
                <p className="text text-secondary mb-0">Earn Points</p>
              </div> */}
              <div className="d-flex justify-content-start align-items-center">
                <i
                  className="fa fa-check-circle me-2 text-success"
                  style={{ cursor: "pointer" }}
                ></i>
                <p className="text text-secondary mb-0">Earn Points</p>
              </div>
              <div className="d-flex justify-content-start align-items-center">
                <i
                  className="fa fa-check-circle me-2 text-success"
                  style={{ cursor: "pointer" }}
                ></i>
                <p className="text text-secondary mb-0">
                  Reedem points to get discount
                </p>
              </div>
              <div>
                <p className="text-secondary">
                  Your have earned{" "}
                  <span className="fw-bold fs-5 text-warning mt-1">
                    500
                  </span>{" "}
                  points so far.{" "}
                  <span className="fw-bold text-primary">Keep Earning!</span>
                </p>
              </div>
            </div>
            <div className="">
              <div>
                {userData && userData.image ? (
                  <img
                    src={`http://localhost:5000/${userData.image}`}
                    alt=""
                    width="100px"
                    height = "100px"
                    // className="img-fluid"

                    style={{ borderRadius: "100%" }}
                  />
                ) : (
                  <img
                    src={userImg}
                    alt=""
                    width="100px"
                    height = "100px"
                    // height={`200`}
                    style={{ borderRadius: "100%" }}
                  />
                )}
              </div>
              <div className="d-flex">
                <a href="/profile-creation" className="text-decoration-none">
                  View Profile
                </a>
                /
                <p
                  className="text-decoration-none text-danger fw-bold text-uppercase "
                  style={{ cursor: "pointer" }}
                  onClick={handleLogout}
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded border p-3">
            <p className="text text-start text-secondary fs-5 fw-bold mb-0">
              Your Activity
            </p>
            <hr className="mt-0 mb-3" />
            <div className="row">
              <div className="col-md-12 mb-3">
                <div className="p-2 bg-light rounded border">
                  <div className="d-flex justify-content-between align-items-center mx-3">
                    <div className="">
                      <p className="text text-secondary mb-0">
                        You have assigned create model task.
                      </p>
                      <span class="badge bg-danger">On Track</span>
                    </div>
                    <div>
                      <button className="btn btn-primary px-4">
                        View Task
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mb-3">
                <div className="p-2 bg-light rounded border">
                  <div className="d-flex justify-content-between align-items-center mx-3">
                    <div className="">
                      <p className="text text-secondary mb-0">
                        You have assigned create model task.
                      </p>
                      <span class="badge bg-success">Completed</span>
                    </div>
                    <div>
                      <button className="btn btn-primary px-4 disabled">
                        Done
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mb-3">
                <div className="p-2 bg-light rounded border">
                  <div className="d-flex justify-content-between align-items-center mx-3">
                    <div className="">
                      <p className="text text-secondary mb-0">
                        You have assigned create model task.
                      </p>
                      <span class="badge bg-success">Completed</span>
                    </div>
                    <div>
                      <button className="btn btn-primary px-4 disabled">
                        Done
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mb-3">
                <div className="p-2 bg-light rounded border">
                  <div className="d-flex justify-content-between align-items-center mx-3">
                    <div className="">
                      <p className="text text-secondary mb-0">
                        You have assigned create model task.
                      </p>
                      <span class="badge bg-success">Completed</span>
                    </div>
                    <div>
                      <button className="btn btn-primary px-4 disabled">
                        Done
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* checkout section */}
        {/* <div className="container col-md-8 mb-4"></div> */}
        {/* checkout section */}
        
      </div>
    </>
  );
};

export default UserDashboard;
