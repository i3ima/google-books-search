import React, { ButtonHTMLAttributes } from "react";
import { StyledButton } from "./Button";

interface IProperties extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: JSX.Element;
}

const IconButton: React.FC<IProperties> = ({ icon, ...properties }) => (
  <StyledButton {...properties}>{icon}</StyledButton>
);

export default IconButton;
