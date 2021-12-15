import React from "react";
import { SignOut } from "../components/Header/HeaderStyles";
import { GoogleLogout } from "react-google-login";
import { useNavigate } from "react-router-dom";
//Redux-nulling a
import { useDispatch } from "react-redux";
import { setUserLogOut } from "../app/userSlice";

const clientID =
  "114509907275-h5gctlj9rlfjbpdt94vlnck7id7eorl0.apps.googleusercontent.com";

export default function SginOutHook() {
  const dispatch = useDispatch();

  let nav = useNavigate();
  const onLogoutSuccess = (res) => {
    dispatch(setUserLogOut());
    console.log("Logged out Success");
    nav("/");
  };

  const onFailure = () => {
    console.log("Handle failure cases");
    alert("problem");
  };

  return (
    <GoogleLogout
      clientId={clientID}
      onLogoutSuccess={onLogoutSuccess}
      onFailure={onFailure}
      render={(renderProps) => (
        <SignOut onClick={renderProps.onClick} disabled={renderProps.disabled}>
          Sign Out
        </SignOut>
      )}
    />
  );
}
