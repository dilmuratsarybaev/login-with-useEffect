import React from "react";
import styled from "styled-components";

export const Card = ({ children }) => {
  return <ContainerDiv>{children}</ContainerDiv>;
};
const ContainerDiv = styled.div`
  padding: 2rem 1rem;
  box-shadow: 4px 1px 8px 4px rgba(99, 106, 112, 0.2);
  width: 40rem;
  margin: 1rem auto;
  border-radius: 0.5rem;
`;
