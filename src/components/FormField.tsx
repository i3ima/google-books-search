import React, { InputHTMLAttributes } from "react";
import { useField } from "formik";
import FormErrorMessage from "./FormErrorMessage";


interface IProps extends InputHTMLAttributes<HTMLInputElement> {
 label: string
 name: string;
}


const FormField: React.FC<IProps> = ({ label, size: _, ...props }) => {
 const [field, { error }] = useField(props)


 return (
     <div className="flex flex-col flex-grow">
      <label className="self-start" htmlFor={field.name}>
       {label}
      </label>
      <input className="transition text-black p-1 outline-none rounded-md border-2 border-gray-500 hover:border-gray-800 focus:border-blue-300" {...field} {...props} id={field.name}/>
      {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
     </div>
 )
}

export default FormField