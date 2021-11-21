import React from "react";
import { Main, TopSection, Layout } from "./HomeStyles";
import LeftSide from './HomeSides/HomeLeftSide/LeftSide';
import MiddSide from './HomeSides/HomeMiddSide/MiddSide';
import RightSide from './HomeSides/HomeRightSide/RightSide'

export default function Home() {
  return (
    <Main>
      <TopSection>
        <h5>
          <a>Hiring in a hurry? - </a>
        </h5>
        <p>
          Find talented pros in record time with Upwork and keep business
          moving.
        </p>
      </TopSection>
      <Layout>

      </Layout>
    </Main>
  );
}
