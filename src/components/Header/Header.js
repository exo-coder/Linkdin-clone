import React from "react";
import { HeaderNavDatas } from "../../data/datas";
import SginOutHook from "../../hooks/SginOutHook";
import {
  Main,
  Content,
  Logo,
  Search,
  SearchIcon,
  Nav,
  NavWrap,
  NavItems,
  NavItem,
  User,
  Menu,
} from "./HeaderStyles";
//Redux
import { useSelector } from "react-redux";
import { selectUserName, selectUserPhoto } from "../../app/userSlice";

export default function Header() {
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  return (
    <Main>
      <Content>
        <Logo>
          <a href="/home">
            <img src="/images/linkedin.png" alt="" />
          </a>
        </Logo>
        <Search>
          <input type="text" placeholder="Search"></input>
          <SearchIcon>
            <img src="/images/search-icon.svg" alt="" />
          </SearchIcon>
        </Search>
        <Nav>
          <NavWrap>
            <NavItems>
            {HeaderNavDatas.map((item) => {
              return (
                <NavItem key={item.id}>
                  <a href="/home">
                    <img src={item.img} alt="" />
                    <span>{item.name}</span>
                  </a>
                </NavItem>
              );
            })}
            </NavItems>
            <User>
              <a>
                <img src={userPhoto ? userPhoto :  '/images/user.svg'} alt="" />
                <span>{userName ? userName : "Me"}</span>
              </a>
              <SginOutHook />
            </User>
            <Menu>
              <a href="/home">
                <img src="/images/nav-work.svg" alt="" />
              </a>
            </Menu>
          </NavWrap>
        </Nav>
      </Content>
    </Main>
  );
}
