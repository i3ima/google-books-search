import React from 'react';

const AdaptiveLayout: React.FC = ({ children }) => {
 return (
		 <div className="flex flex-col space-y-5 mt-10 px-4 items-center justify-start text-white">
			{children}
		 </div>
 );
};

export default AdaptiveLayout