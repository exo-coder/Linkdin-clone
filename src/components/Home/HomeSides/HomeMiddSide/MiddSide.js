import React from "react";
import { IconsPartDatas } from "../../../../data/datas";
import {
  Main,
  CommCard,
  ShareBox,
  PostPart,
  IconsPart,
  MainArticle,
  ShareActor,
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
              <span>Title</span>
              <span>Title</span>                  
            </div>
          </a>
        </ShareActor>
      </MainArticle>
    </Main>
  );
}
