import React from "react";
import styled from "styled-components";

import Character from "./Character";

export default function ListOfCharacter({ rkImg }) {
  return (
    <ContentWrapper>
      {rkImg.map((item) => (
        <Character {...item} key={item.id} />
      ))}
    </ContentWrapper>
  );
}

const ContentWrapper = styled.div`
  max-width: 1254px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 40px;
  margin: 40px auto 0px;
  padding: 0px 40px;
  @media (min-width: 360px) {
    justify-items: center;
  }
`;
