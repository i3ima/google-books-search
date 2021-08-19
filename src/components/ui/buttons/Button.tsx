import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components'

export const StyledButton = styled.button`
  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  :focus {
    border-color: var(--focus);
		
  }

  background-color: var(--button);
  padding: 0.5rem;
  border-color: var(--button);
  border-width: 2px;
  border-radius: 0.375rem;
`

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {

}

const Button: React.FC<IProps> = ({ children, ...props }) => {
 return (
		 <StyledButton {...props}>
			{children}
		 </StyledButton>
 );
};

export default Button;