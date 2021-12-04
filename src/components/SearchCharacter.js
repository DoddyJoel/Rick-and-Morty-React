import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";

const SearchCharacter = ({ setSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleOnchange = (envt) => {
    setInputValue(envt.target.value);
  };
  const handleSubmit = (envt) => {
    envt.preventDefault();
    setSearch(inputValue);
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder=" "
          value={inputValue}
          onChange={handleOnchange}
        />
        <Label>Search</Label>
        <SearchIcon />
      </Form>
    </Wrapper>
  );
};

export default SearchCharacter;

const Wrapper = styled.div`
  margin: 40px auto 0px;
  display: grid;
  grid-template-columns: auto;
  justify-content: center;
`;

const Form = styled.form`
  position: relative;
  width: 300px;
  height: 50px;
`;

const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 70%;
  border: 3px solid #9a8c98;
  font-size: inherit;
  font-family: inherit;
  border-radius: 8px;
  padding-left: 16px;
  color: #f2e9e4;
  outline: none;
  background: none;

  :hover {
    border-color: #c9ada7;
  }

  :focus {
    border-color: #f2e9e4;
  }
`;

const Label = styled.label`
  position: absolute;
  left: 16px;
  top: 12.8px;
  color: #f2e9e4;
  background: #22223b;
  cursor: text;
  transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in;
  ${Input}:focus ~ &, ${Input}:not(:placeholder-shown)${Input}:not(:focus) ~ & {
    top: -6.5px;
    font-size: 12px;
    left: 12px;
  }
`;

const SearchIcon = styled(FaSearch)`
  position: absolute;
  top: 12.8px;
  left: 290px;
  color: #22223b;
  transition: 0.5s;
  ${Input}:hover ~ & {
    color: #c9ada7;
  }
  ${Input}:focus ~ & {
    color: #f2e9e4;
  }

  ${Input}:focus ~ &, ${Input}:not(:placeholder-shown)${Input}:not(:focus) ~ & {
    color: #f2e9e4;
  }
`;
