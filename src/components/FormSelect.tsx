import React, { InputHTMLAttributes } from "react";
import { useField } from "formik";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
 label: string
 name: string;
}

const FormSelect: React.FC<IProps> = ({ label, children, size: _, ...props }) => {
 const [field] = useField(props)

 return (
		 <div className="flex flex-grow items-center space-x-2">
			<label htmlFor={field.name}>{label}: </label>
			<select className="text-black p-1 rounded-md flex-grow" {...field}>
			 {children}
			</select>
		 </div>
 )
}

export default FormSelect