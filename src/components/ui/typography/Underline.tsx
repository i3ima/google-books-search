import React from "react";
import styled from "styled-components";
import { ParagraphProperties } from "types";

const UnderlineParagraph = styled.p`
  text-decoration: underline;
`;

const Underline: React.FC<ParagraphProperties> = ({
  children,
  ...properties
}) => <UnderlineParagraph {...properties}>{children}</UnderlineParagraph>;

export default Underline;
