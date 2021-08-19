import React from 'react';
import styled from "styled-components";
import { ParagraphProps } from "types";

const StyledParagraph = styled.p`
  font-weight: 700;
  line-height: 1.75rem;
  margin: 0;
`

const Heading: React.FC<ParagraphProps> = ({ children, ...props }) => {
 return (
		 <StyledParagraph {...props}>
			{children}
		 </StyledParagraph>
 );
};

export default Heading;