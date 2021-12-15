import React from "react";
import styled from "styled-components";
import SignInHook from "../../hooks/SignInHook";

export default function LoginTopPage() {  
  return (
    <Main>
      <Hero>
        <img src="/images/login-hero.svg" alt="" />
        <h1>Wellcome to your profestional cummunity</h1>
      </Hero>
      <Form>
        <SignInHook SignInBtnCondition={false} />
      </Form>
    </Main>
  );
}

const Main = styled.section`
  display: flex;
  flex-direction: row;
  align-content: start;
  min-height: 700px;
  padding: 50px 0;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  margin: auto;
  @media (max-width: 768px) {
    min-height: 0px;
    margin: 0;
    flex-direction: column;
  }
`;

const Hero = styled.div`
  width: 100%;
  h1 {
    margin-top: 45px;
    width: 55%;
    font-size: 56px;
    color: #2977c9;
    font-weight: 200;
    @media (max-width: 768px) {
      margin-top: 10px;
      font-size: 32px;
      text-align: center;
      width: 100%;
    }
  }
  img {
    width: 80%;
    height: 500px;
    position: absolute;
    right: -260px;
    margin-top: 10px;
    @media (max-width: 768px) {
      width: 100%;
      margin-top: 80px;
      right: 0;
      height: 400px;
    }
  }
`;

const Form = styled.div`
  margin-top: 80px;
  width: 408px;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 450px;
    width: 100%;
  }
`;


