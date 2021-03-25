import React from "react";
import GoogleLogin from "react-google-login";
import axios from "axios";
const Googlelogin = () => {
  const responseGoogle = (response) => {
    console.log(response.tokenId);
    axios({
      method: "POST",
      url: "api/google-login",
      data: { idToken: response.tokenId },
    })
      .then((response) => {
        console.log("GOOGLE SIGNIN SUCCESS", response);
        // Inform Parent Component
      })
      .catch((error) => {
        console.log("GOOGLE SIGNIN ERROR", error.response);
      });
    //Make request to backend
  };
  return (
    <div>
      <GoogleLogin
        clientId="43969747429-oq0ohjhpdfig2mj3cb2cnmbb6jv63e42.apps.googleusercontent.com"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        render={(renderProps) => (
          <div
            className="form__icon"
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            <i className="fab fa-google">Login</i>
          </div>
        )}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default Googlelogin;
