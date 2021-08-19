import React from "react";


const FormErrorMessage: React.FC = ({ children }) => {

 return (
 		<p className="pl-1 text-md text-red-500">
		 {children}
		</p>
 )
}

export default FormErrorMessage;