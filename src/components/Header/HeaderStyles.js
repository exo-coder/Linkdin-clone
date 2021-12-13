import styled from "styled-components";

export const Main = styled.div`
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  padding: 0 24px;
  left: 0;
  top: 0;
  position: fixed;
  width: 100%;
  z-index: 1;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px;
`;

export const Logo = styled.div`
  margin-right: 8px;
  font-size: 0px;
`;

export const Search = styled.div`
  display: flex;
  flex-grow: 1;
  position: relative;
  input {
    width: 200px;
    max-width: 250px;
    box-shadow: none;
    background-color: #eef3f8;
    border-radius: 2px;
    color: rgba(0, 0, 0, 0.9);
    padding: 0 8px 0 40px;
    line-height: 1.75;
    font-weight: 400;
    font-size: 14px;
    height: 34px;
    vertical-align: text-top;
    border: solid 1px;
    border-color: #15a2be;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const SearchIcon = styled.div`
  width: 40px;
  position: absolute;
  z-index: 1;
  top: 10px;
  margin: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Nav = styled.nav`
  margin-left: auto;
  display: block;
  margin-right: 30px;
`;

export const NavWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;
`;

export const NavItems = styled.div`
  display: flex;
  @media (max-width: 768px) {
    position: fixed;
    margin: 0;
    left: 0;
    bottom: 0;
    background: white;
    width: 100%;
    justify-content: space-between;
  }
`;

export const NavItem = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 13px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 52px;
    min-width: 80px;
    position: relative;
    text-decoration: none;
    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }
    @media (max-width: 768px) {
      min-width: 70px;
    }
  }


  &:hover {
    a {
      span {
        color: rgba(0, 0, 0, 1);
      }
    }
  }
`;

export const SignOut = styled.div`
  display: none;
  position: absolute;
  top: 50px;
  background: white;
  border-radius: 0 0 5px 5px;
  width: 80px;
  height: 30px;
  font-size: 14px;
  transition-duration: 167ms;
  text-align: center;
`;

export const User = styled(NavItem)`
  a > svg {
    width: 24px;
    border-radius: 50%;
  }
  a > img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
  span {
    display: flex;
    align-items: center;
  }

  &:hover {
    ${SignOut} {
      align-items: center;
      display: flex;
      justify-content: center;
    }
  }
`;

export const WorkList = styled(NavItem)`
  a {
    border-left: 1px solid rgba(0, 0, 0, 0.08);
    @media (max-width: 768px) {
      border: none;
    }
  }
`;
