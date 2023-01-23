import React from "react";
import styled from "styled-components";
import { Navigation } from "../Navigation/Navigation";
const StyledHeader = styled.header`
  text-align: left;
  padding: 1rem;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-self: center;
  background-color: #700170;
`;
export const Header = ({ isLoggedIn, setDataList, loginHandler}) => {
  return (
    <StyledHeader>
      <h1>A Typical Page</h1>
   {isLoggedIn ? null  :< Navigation setDataList={setDataList}  loginHandler={loginHandler}/>} 
    </StyledHeader>
  );
};
