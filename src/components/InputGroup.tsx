import React from "react";


const InputGroup: React.FC = ({ children }) => {

 return (
 		<div className="flex items-center flex-row space-x-2">
		 {children}
		</div>
 )
}

export default InputGroup