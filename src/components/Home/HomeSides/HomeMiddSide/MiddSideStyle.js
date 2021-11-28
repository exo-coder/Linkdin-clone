import styled from "styled-components";

export const Main = styled.div`
  grid-area: Middside;
`;

export const CommCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  position: relative;
  padding: 10px;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

export const ShareBox = styled(CommCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: white;
`;

export const PostPart = styled.div`
  display: flex;
  flex-direction: row;
  img {
    width: 50px;
    border-radius: 50%;
    margin-right: 8px;
  }
  button {
    color: rgba(0, 0, 0, 0.7);
    font-weight: 700;
    font-size: 14px;
    text-align: left;
    padding-left: 15px;
    width: 100%;
    border-radius: 30px;
    background-color: none;
    border: 3px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`;

export const IconsPart = styled.div`
  width: 100%;
  align-items: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  button { 
    margin-top: 5px;
    outline: none;
    color: rgb(0, 0, 0, 0.7);
    font-size: 12px;
    line-height: 1.5;
    padding: 5px;
    background: transparent;
    font-weight: 600;
    border-radius: 40px;
    display: flex;
    flex-direction: row;
    &:hover {
      background-color: rgb(0, 0, 0, 0.1);
      color: #70b5f9;
    }
  }
  img {
    width: 18px;
  }
`;

export const MainArticle = styled(CommCard)``;

export const ShareActor = styled.div``;
