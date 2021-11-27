import React from "react";
import {
  Main,
  Card,
  UserInfo,
  BackGround,
  Pho,
  Link,
  AddPho,
  Widget,
  Item,
  CummunityCard
} from "./LeftSideStyles";

export default function LeftSide() {
  return (
    <Main>
      <Card>
        <UserInfo>
          <BackGround />
          <a>
            <Pho />
            <Link>Wellcome</Link>
          </a>
          <a>
            <AddPho>Add Photo</AddPho>
          </a>
        </UserInfo>
        <Widget>
          <a>
            <div>
              <span>Connections</span>
              <span>Grow your network</span>
            </div>
            <img src="/images/widget-icon.svg" alt="" />
          </a>
        </Widget>
        <Item>
          <span>
            <img src="/images/item-icon.svg" alt="" />
            My Items
          </span>
        </Item>
      </Card>
      <CummunityCard>
        <a>
          <span>Groups</span>
        </a>
        <a>
          <span>
            Events
            <img src="/images/plus-icon.svg" alt="" />
          </span>
        </a>
        <a>
          <span>Follow Hashtags</span>
        </a>
        <a>
          <span>Discover more</span>
        </a>
      </CummunityCard>
    </Main>
  );
}
