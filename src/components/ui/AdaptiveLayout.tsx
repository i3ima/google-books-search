import React from "react";

const AdaptiveLayout: React.FC = ({ children }) => (
  <div className="flex flex-col gap-y-5 py-5 px-4 items-center justify-start text-white">
    {children}
  </div>
);

export default AdaptiveLayout;
