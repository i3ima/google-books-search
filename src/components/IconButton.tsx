import React, { ButtonHTMLAttributes } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
 icon: JSX.Element
}

const IconButton: React.FC<IProps> = ({ icon, ...props }) => {

 const onEnterPress = (event: React.KeyboardEvent<HTMLButtonElement>) => {
  return event.key === 'enter' ? event.currentTarget.click() : null
 }

 return (
		 <button onKeyPress={(event => onEnterPress(event))}
						 className="p-2 transition bg-gray-600 rounded-md border-2 border-gray-600 hover:bg-gray-500 focus:border-blue-300" {...props}>
			{icon}
		 </button>
 )
}

export default IconButton