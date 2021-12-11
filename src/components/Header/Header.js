import React from "react";
import { HeaderNavDatas } from "../../data/datas";
import { useNavigate } from 'react-router-dom'
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
  WorkList,
  SignOut,
} from "./HeaderStyles";

export default function Header() {
  let nav = useNavigate();
  const Logout = () => {
    nav("/");
  }
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
                <NavItem className="" key={item.id}>
                  <a href="/home">
                    <img src={item.img} alt="" />
                    <span>{item.name}</span>
                  </a>
                </NavItem>
              );
            })}
            </NavItems>
            <User>
              <a href="/home">
                <img src="/images/user.svg" alt="" />
                <span>Me</span>
              </a>
              <SignOut onClick={Logout}>
                <a href=''>Sign Out</a>
              </SignOut>
            </User>
            <WorkList>
              <a href="/home">
                <img src="/images/nav-work.svg" alt="" />
                <span>
                  Work
                  <img src="/images/down-icon.svg" alt="" />
                </span>
              </a>
            </WorkList>
          </NavWrap>
        </Nav>
      </Content>
    </Main>
  );
}
