import React from "react";
import { BiError } from "react-icons/bi";
import { SerializedError } from "@reduxjs/toolkit";
import Paragraph from "components/ui/typography/Paragraph";

interface IProperties {
  reason: SerializedError;
}

const ErrorMessage: React.FC<IProperties> = ({ reason }) => (
  <div className="flex flex-col md:flex-row items-center gap-x-2 text-red-500 bg-red-400 text-lg bg-opacity-20 p-2 rounded-md">
    <BiError size={30} />
    <Paragraph>
      Oh no, an error has occurred. Reason: {reason.message}
    </Paragraph>
  </div>
);

export default ErrorMessage;
