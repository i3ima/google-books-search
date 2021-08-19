import React, { ButtonHTMLAttributes } from "react";
import { StyledButton } from "./Button";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
 icon: JSX.Element
}

const IconButton: React.FC<IProps> = ({ icon, ...props }) => (
				<StyledButton {...props}>
				 {icon}
				</StyledButton>
		)

export default IconButton