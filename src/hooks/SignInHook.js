import React from "react";
import styled from "styled-components";
import GoogleLogin from "react-google-login";
import { useNavigate } from "react-router-dom";
//Redux
import { useDispatch } from "react-redux";
import { setUserLogInInfo } from "../app/userSlice";

const clientID =
  "114509907275-h5gctlj9rlfjbpdt94vlnck7id7eorl0.apps.googleusercontent.com";
export default function SignInHook({ SignInBtnCondition = true }) {
  const dispatch = useDispatch();

  //select to next page
  let nav = useNavigate();
  const onSuccess = (res) => {
    dispatch(
      setUserLogInInfo({
        name: res.profileObj.givenName,
        email: res.profileObj.email,
        photo: res.profileObj.imageUrl,
      })
    );
    console.log(res.profileObj);
    nav("home");
  };

  const onFailure = () => {
    alert("didn't Loged-In !");
    nav("/");
  };

  return (
    <GoogleLogin
      clientId={clientID}
      onSuccess={onSuccess}
      onFailure={onFailure}
      render={
        SignInBtnCondition
          ? (props) => (
              <SignInBtn onClick={props.onClick} disabled={props.disabled}>
                Sign in
              </SignInBtn>
            )
          : (props) => (
              <GoogleSginInBtn
                onClick={props.onClick}
                disabled={props.disabled}
              >
                <img src="/images/google.svg" alt="" />
                <p> Sign in with Google </p>
              </GoogleSginInBtn>
            )
      }
      cookiePolicy={"single_host_origin"}
      isSignedIn={true}
    />
  );
}

const SignInBtn = styled.button`
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  border-radius: 24px;
  width: 80px;
  height: 28px;
  margin-left: 10px;
  font-size: 14px;
  transition-duration: 160ms;
  cursor: pointer;
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    text-decoration: none;
  }
`;

const GoogleSginInBtn = styled.button`
  display: flex;
  justify-content: center;
  background-color: #fff;
  align-items: center;
  width: 100%;
  box-shadow: inset 0 0 0 1px black;
  border-radius: 24px;
  padding: 10px;
  cursor: pointer;
  p {
    padding: 5px;
    font-size: 18px;
    color: black;
  }
`;
