import React, { useEffect, useState } from "react";
import ListOfCharacter from "../../components/ListOfCharacter";
import getCharacter from "../../service/getCharacter";
import Spinner from "../../components/Spinner/Spinner";
import styled from "styled-components";

const SearchResutls = ({ params }) => {
  const { keyword } = params;
  const [rkImg, setRkImg] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getCharacter(keyword).then((item) => {
      setLoading(false);
      setRkImg(item);
    });
  }, [keyword]);
  return (
    <>
      {loading ? (
        <Wrapper>
          <Spinner />
        </Wrapper>
      ) : (
        <ListOfCharacter rkImg={rkImg} />
      )}
    </>
  );
};

export default SearchResutls;

const Wrapper = styled.div`
  max-width: 1254px;
  display: grid;
  height: 50vh;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 40px;
  margin: 40px auto 0px;
  padding: 0px 40px;
  align-content: center;
  justify-content: center;
  @media (min-width: 360px) {
    justify-items: center;
  }
`;
