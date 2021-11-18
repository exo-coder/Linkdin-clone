import React from "react";
import styled from "styled-components";
import LoginPageHeader from "../components/LoginPage/LoginPageHeader";
import LoginTopPage from "../components/LoginPage/LoginTopPage";

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
