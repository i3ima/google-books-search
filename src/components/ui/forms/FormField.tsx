import React, { InputHTMLAttributes } from "react";
import { useField } from "formik";
import FormErrorMessage from "./FormErrorMessage";
import styled from 'styled-components';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
 label: string
 name: string;
}

const StyledInput = styled.input`
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

  padding: 0.25rem;
  border: rgb(107, 114, 128) solid 2px;
  border-radius: 0.575rem;

`

const FormField: React.FC<IProps> = ({ label, size: _, ...props }) => {
 const [field, { error }] = useField(props)


 return (
		 <div className="flex flex-col flex-grow">
			<label className="self-start" htmlFor={field.name}>
			 {label}
			</label>
			<StyledInput {...field} {...props} id={field.name} />
			{error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
		 </div>
 )
}

export default FormField