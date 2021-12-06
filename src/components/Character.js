import React from "react";
import styled from "styled-components";
import Tilt from "./animation/Tilt";
const Character = ({ image, name, species, nameLocation, status }) => {
  const setColor = (status) => {
    if (status === "Alive") {
      return "#80ed99";
    } else if (status === "Dead") {
      return "#E24D28";
    } else {
      return "#6c757d";
    }
  };
  const options = {
    speed: 300,
    max: 30,
  };
  return (
    <Tilt options={options}>
      <ImageWrapper>
        <Img src={image} alt={name} />
        <TextWrapper>
          <Title>{name}</Title>
          <Species>{species}</Species>
          <Location>{nameLocation}</Location>
        </TextWrapper>
        <Status status={setColor(status)} />
      </ImageWrapper>
    </Tilt>
  );
};

export default Character;

const Img = styled.img`
  width: 240px;
  height: 240px;
  object-fit: cover;
  border-radius: 20px 20px 0 0;
`;

const ImageWrapper = styled.div`
  position: relative;
  max-width: 240px;
  height: 360px;
  border-radius: 20px;
  background: linear-gradient(
    209.21deg,
    rgba(34, 34, 59, 1) 13.57%,
    rgba(74, 78, 105, 1) 98.38%
  );
  box-shadow: rgb(89 42 121 / 30%) 0px 20px 40px, rgb(0 0 0 / 5%) 0px 1px 3px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  :hover {
    background: linear-gradient(
      209.21deg,
      rgba(242, 233, 228, 1) 13.57%,
      rgba(154, 140, 152, 1) 98.38%
    );
    transition: 1.5s cubic-bezier(0.075, 0.82, 0.165, 1);
    transform: scale(1.1);
  }
`;

const TextWrapper = styled.div`
  margin: 10px 0 0 0;
  padding: 0 15px;
  ${ImageWrapper}:hover & {
    h1,
    h2,
    h3 {
      background: linear-gradient(
        209.21deg,
        rgba(34, 34, 59, 1) 13.57%,
        rgba(74, 78, 105, 1) 98.38%
      );
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      transition: 0.8s cubic-bezier(0.86, 0, 0.07, 1);
    }
  }
`;

const Title = styled.h1`
  color: #fff;
  margin-bottom: 16px;
  font-size: 20px;
  font-weight: bold;
`;

const Species = styled.h2`
  color: #fff;
  margin-bottom: 5px;
  font-size: 16px;
  font-weight: bold;
`;

const Location = styled.h3`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;

const Status = styled.div`
  background-color: ${({ status }) => status};
  width: 25px;
  height: 25px;
  border-radius: 50%;
  position: absolute;
  top: 10px;
  left: 200px;
  border: 5px solid #22223b;
`;
