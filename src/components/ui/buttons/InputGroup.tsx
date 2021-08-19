import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  column-gap: 0.5rem;
`;

const InputGroup: React.FC = ({ children }) => (
  <StyledDiv>{children}</StyledDiv>
);

export default InputGroup;
