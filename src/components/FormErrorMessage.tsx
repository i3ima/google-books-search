import React from "react";


const FormErrorMessage: React.FC = ({ children }) => {

 return (
 		<p className="text-lg text-red-500">
		 {children}
		</p>
 )
}

export default FormErrorMessage;