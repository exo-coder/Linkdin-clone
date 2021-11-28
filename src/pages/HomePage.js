import React from 'react'
import styled from "styled-components";
import Header from '../components/Header/Header'
import Home from '../components/Home/Home';

export default function HomePage() {
    return (
        <Main>
            <Header />
            <Home />
        </Main>
    )
}

const Main = styled.div`
max-width: 1120px;
align-items: center;
margin: auto;
`;

