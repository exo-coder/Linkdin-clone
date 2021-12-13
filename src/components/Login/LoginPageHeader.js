import React from "react";
import styled from "styled-components";
import SignInHook from "../../hooks/SignInHook";

export default function LoginPageHeader() {
  return (
    <Main>
      <Logo>
        <a href="/">
          <img src="/images/login-logo.svg" alt="" />
        </a>
        <JoinNow>Join now</JoinNow>
        <SignInHook />
      </Logo>
    </Main>
  );
}

const Main = styled.div`
  margin: 0;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;
  & > a {
    width: 135px;
    height: 34px;
    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;

const JoinNow = styled.div`
  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none;
  border-radius: 4px;
  margin-left: auto;
  color: rgba(0, 0, 0, 0.6);
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.78);
  }
`;
