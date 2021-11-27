import React from "react";
import {
  Main,
  Card,
  Title,
  FeedList,
  Avatar,
  Recommended,
  BannCard,
} from "./RightSideStyle";

export default function RightSide() {
  return (
    <Main>
      <Card>
        <Title>
          <h2>Add to your feed</h2>
          <img src="/images/feed-icon.svg" alt="" />
        </Title>
        <FeedList>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>#Linkedin</span>
              <button>Follow</button>
            </div>
          </li>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>#Video</span>
              <button>Follow</button>
            </div>
          </li>
        </FeedList>
        <Recommended>
          View all recommendations
          <img src="/images/right-icon.svg" alt="" />
        </Recommended>
      </Card>
      <BannCard>
        <img
          src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg"
          alt=""
        />
      </BannCard>
    </Main>
  );
}
