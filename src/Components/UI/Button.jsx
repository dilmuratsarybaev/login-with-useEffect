import React from "react";
import styled from "styled-components";

export const Button = ({ children, bgColor, disabled, onClick }) => {
  return (
    <StyledButton bgColor={bgColor} disabled={disabled} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
const StyledButton = styled.button`
  padding: 0.5rem 2rem;
  background-color: ${(props) => (props.bgColor ? "#50015F" : "#C0C0C0	")};
  color: white;
  border: none;
  border-radius: 1rem;
  font-size: 1rem;
  font-weight: 700;
`;
