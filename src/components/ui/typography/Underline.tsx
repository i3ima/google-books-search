import React from 'react';
import styled from "styled-components";
import { ParagraphProps } from "types";

const UnderlineParagraph = styled.p`
	text-decoration: underline;
`

const Underline: React.FC<ParagraphProps> = ({ children, ...props }) => {
 return (
		 <UnderlineParagraph {...props}>
			{children}
		 </UnderlineParagraph>
 );
};

export default Underline;