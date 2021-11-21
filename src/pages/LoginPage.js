import React from "react";
import styled from "styled-components";
import LoginPageHeader from "../components/Login/LoginPageHeader";
import LoginTopPage from "../components/Login/LoginTopPage";

export default function LoginPage() {
  return (
    <Main>
      <LoginPageHeader />
      <LoginTopPage />
    </Main>
  );
}

const Main = styled.div`
  max-width: 1120px;
  margin: auto;
  padding: 10px;
`;
