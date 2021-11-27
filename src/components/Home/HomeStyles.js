import styled from "styled-components";

export const Main = styled.div`
  padding-top: 55px;
  max-width: 100%;
`;

export const TopSection = styled.section`
  min-height: 50px;
  padding: 16px 0;
  box-sizing: content-box;
  text-align: center;
  text-decoration: underline;
  display: flex;
  justify-content: center;
  h5 {
    color: #0a66c2;
    font-size: 14px;
    cursor: pointer;
    a {
      font-weight: 700;
    }
  }
  p {
    font-size: 14px;
    color: #434649;
    font-weight: 600;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 5px;
  }
`;

export const Layout = styled.div`
  display: grid;
  grid-template-areas: "Leftside Middside Rightside";
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
  column-gap: 25px;
  row-gap: 25px;
  margin: 25px 0;
  padding: 15px;
  @media (max-width: 870px) {
    display: flex;
    flex-direction: column;
    padding: 0 15px;
  }
`;
