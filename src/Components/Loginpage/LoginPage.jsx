import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { Button } from "../UI/Button";
import { Card } from "../UI/Card";
const StyledContainer = styled.form`
  margin: 1rem auto;
`;
const StyledInputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;
const StyledInput = styled.input`
  width: 30rem;
  padding: 0.5rem;
  outline: none;
`;
const ButtonContainer = styled.button`
  border: none;
  background-color: white;
`;
export const LoginPage = ({loginHandler}) => {
  const [enterEmail, setEmail] = useState("");
  const [enterPassword, setPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const emailChangedHandler = (e) => {
    setEmail(e.target.value);
    setIsEmailValid(enterEmail.includes("@"));
  };
  const passwordChangedHandler = (e) => {
    setPassword(e.target.value);
    setIsPasswordValid(enterPassword.trim().length > 6);
  };
  useEffect(() => {
    setIsFormValid(isEmailValid, isPasswordValid);
  }, [isEmailValid, isPasswordValid]);
  // console.log(isEmailValid);
  // console.log(isPasswordValid);

  const validateEmailHandler = () => {
    setIsFormValid(isEmailValid && isPasswordValid);
  };
  const validatePasswordHandler = () => {
    setIsFormValid(isEmailValid && isPasswordValid);
  };

  const submitHanler = (e) => {
    e.preventDefault();
    loginHandler()
  };
  return (
    <Card>
      <StyledContainer>
        <StyledInputContainer>
          <label htmlFor="">E-Mail</label>
          <StyledInput
            type="text"
            value={enterEmail}
            onChange={emailChangedHandler}
            onBlur={validateEmailHandler}
          />
        </StyledInputContainer>
        <StyledInputContainer>
          <label htmlFor="">Password</label>
          <StyledInput
            type="password"
            value={enterPassword}
            onChange={passwordChangedHandler}
            onBlur={validatePasswordHandler}
          />
        </StyledInputContainer>
        <ButtonContainer>
          <Button
            bgColor={isFormValid}
            disabled={!isFormValid}
            onClick={submitHanler}
          >
            Login
          </Button>
        </ButtonContainer>
      </StyledContainer>
    </Card>
  );
};
