import React, { ButtonHTMLAttributes } from "react";
import { StyledButton } from "./Button";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
 icon: JSX.Element
}

const IconButton: React.FC<IProps> = ({ icon, ...props }) => {

 const onEnterPress = (event: React.KeyboardEvent<HTMLButtonElement>) => {
  return event.key === 'enter' ? event.currentTarget.click() : null
 }

 return (
		 <StyledButton onKeyPress={(event => onEnterPress(event))} {...props}>
			{icon}
		 </StyledButton>
 )
}

export default IconButton