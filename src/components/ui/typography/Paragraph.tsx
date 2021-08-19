import React from 'react';
import { ParagraphProps } from "types";
import styled from "styled-components";


const StyledParagraph = styled.p`
  font-size: 1rem;
  line-height: 1.75rem;
  margin: 0;
`

const Paragraph: React.FC<ParagraphProps> = ({ children }) => {
 return (
		 <StyledParagraph>
			{children}
		 </StyledParagraph>
 );
};

export default Paragraph;