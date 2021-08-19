import React from "react";
import styled from "styled-components";
import { ParagraphProperties } from "types";

const StyledParagraph = styled.p`
  font-weight: 700;
  line-height: 1.75rem;
  margin: 0;
`;

const Heading: React.FC<ParagraphProperties> = ({
  children,
  ...properties
}) => <StyledParagraph {...properties}>{children}</StyledParagraph>;

export default Heading;
