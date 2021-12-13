import React from "react";
import styled from "styled-components";
import GoogleLogin from "react-google-login";
import { useNavigate } from "react-router-dom";

const clientID =
  "114509907275-h5gctlj9rlfjbpdt94vlnck7id7eorl0.apps.googleusercontent.com";
export default function SignInHook() {
  let nav = useNavigate();
  const onSuccess = (res) => {
    console.log(
      `${res.profileObj.name} + ${res.profileObj.email} + ${res.profileObj.imageUrl}`
    );
    nav("home");
  };

  const onFailure = (res) => {
    alert(
      `Failed to login. 😢 Please try again OR turn on VPN to change your IP then try! ${res}`
    );
  };

  return (
    <GoogleLogin
      clientId={clientID}
      onSuccess={onSuccess}
      onFailure={onFailure}
      render={(renderProps) => (
        <SignInBtn
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
        >
          Sign in
        </SignInBtn>
      )}
      cookiePolicy={"single_host_origin"}
      isSignedIn={true}
    />
  );
}

const SignInBtn = styled.button`
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  cursor: pointer;
  border-radius: 24px;
  width: 80px;
  height: 28px;
  margin-left: 10px;
  font-size: 14px;
  transition-duration: 160ms;
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    text-decoration: none;
  }
`;
