import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'

export default function App() {
  return (
    <Main>
      <Router>
        <Routes>
          <Route path='/'  element={<LoginPage />}/>
          <Route path='/home'  element={<HomePage />} />
        </Routes>
      </Router>
    </Main>
  );
}

const Main = styled.div``;
