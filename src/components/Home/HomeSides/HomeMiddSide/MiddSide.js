import React from "react";
import { IconsPartDatas } from "../../../../data/datas";
import {
  Main,
  ShareBox,
  PostPart,
  IconsPart,
  MainArticle,
  ShareActor,
  Description,
  SharedImg,
} from "./MiddSideStyle";
//redux
import { useSelector } from "react-redux";
import { selectUserName, selectUserPhoto, selectUserEmail } from "../../../../app/userSlice";

export default function MiddSide() {
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const userEmail = useSelector(selectUserEmail);

  return (
    <Main>
      <ShareBox>
        <PostPart>
          <img src={userPhoto ? userPhoto : '/images/user.svg'} alt="" />
          <button>Start the post</button>
        </PostPart>
        <IconsPart>
          {IconsPartDatas.map((item) => {
            return (
              <button key={item.id}>
                <img src={item.img} alt="" />
                <span>{item.span}</span>
              </button>
            );
          })}
        </IconsPart>
      </ShareBox>
      <MainArticle>
        <ShareActor>
          <a>
            <img src={userPhoto ? userPhoto : '/images/user.svg'} alt="" />
            <div>
              <span>{userName ? userName : 'User'}</span>
              <span>{userEmail ? userEmail : 'Email'}</span>
              <span>Date</span>
            </div>
          </a>
          <button>
            <h1>. . .</h1>
          </button>
        </ShareActor>
        <Description>Desc</Description>
        <SharedImg className="shared-img">
          <a>
            <img src="/images/pic-shared.jpeg" alt="" />
          </a>
        </SharedImg>
      </MainArticle>
    </Main>
  );
}
