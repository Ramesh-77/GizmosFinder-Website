import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { parseJwt, useScript } from "./Utils/Utils";
import FacebookLogin from "react-facebook-login";
// import GoogleLogin from "react-google-login";
import axios from "axios";

const Home = () => {
  const [signin, setSignIn] = useState(false);

  const googlebuttonref = useRef();
  const onGoogleSignIn = (user) => {
    let userCred = user.credential;
    const data = {
      token: userCred,
    };
    axios.post("http://localhost:5000/user/google-login", data).then((user) => {
      console.log(user.data.data.token);
      localStorage.setItem("token", user.data.data.token);
      setSignIn(true);
    });
  };

  useScript("https://accounts.google.com/gsi/client", () => {
    window.google.accounts.id.initialize({
      client_id:
        "103948036055-74pagps1rft774arfnqqnteo35s6ebog.apps.googleusercontent.com", // here's your Google ID
      callback: onGoogleSignIn,
      auto_select: false,
    });

    window.google.accounts.id.renderButton(googlebuttonref.current, {
      size: "medium",
    });
  });

  const logoutbtn = () => {
    localStorage.clear();
    window.location.href = "/";
    setSignIn(false);
  };

  console.log(signin);

  const responseFacebook = (response) => {
    console.log(response.userID);
    const data = {
      accessToken: response.accessToken,
      userID: response.userID,
    };
    axios
      .post("http://localhost:5000/user/facebook-login", data)
      .then((response) => {
        console.log(response.data.data.token);
        localStorage.setItem("token", response.data.data.token);
        setSignIn(true);
        console.log(response);
      });
  };

  const td = parseJwt(localStorage.getItem("token"));
  console.log(td);
  return (
    <div>
      <div
        className="social_medias_auth"
        style={{ display: "flex", gap: "20px", margin: "30px" }}
      >
        {signin ? (
          <>
            <div>
              <span>{td.name}</span>
              <img src={td.image} alt="" />
            </div>
            <div>
              <button onClick={logoutbtn}>Logout</button>
            </div>
          </>
        ) : (
          <>
            <div className="google_auth">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100vh",
                }}
              >
                <div ref={googlebuttonref}></div>
              </div>
            </div>
            <div className="facebook">
              <FacebookLogin
                // appId="1212818562827222"
                //gizmos ko app id
                appId="1042607503061547"
                autoLoad={false}
                fields="name,email,picture"
                callback={responseFacebook}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
