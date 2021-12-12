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


export default function MiddSide() {
  return (
    <Main>
      <ShareBox>
        <PostPart>
          <img src="/images/user.svg" alt="" />
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
            <img src="/images/user.svg" alt="" />
            <div>
              <span>Title</span>
              <span>Info</span>
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
