import React, { InputHTMLAttributes } from "react";
import { useField } from "formik";
import styled from "styled-components";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
 label: string
 name: string;
}

const StyledSelect = styled.select`
  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline: 2px solid transparent;
  outline-offset: 2px;
  color: black;

  :focus {
    --tw-border-opacity: 1;
    border-color: rgba(147, 197, 253, var(--tw-border-opacity));
  }
	flex-grow: 1;
  padding: 0.25rem;
  border: rgb(107, 114, 128) solid 2px;
  border-radius: 0.375rem;
`

const FormSelect: React.FC<IProps> = ({ label, children, size: _, ...props }) => {
 const [field] = useField(props)

 return (
		 <div className="flex flex-grow items-center space-x-2">
			<label htmlFor={field.name}>{label} </label>
			<StyledSelect {...field}>
			 {children}
			</StyledSelect>
		 </div>
 )
}

export default FormSelect