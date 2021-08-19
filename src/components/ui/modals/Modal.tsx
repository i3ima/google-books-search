import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";
import { useAppDispatch } from "lib/hooks";
import { closeModal } from "features/modal/modalSlice";
import classes from "./Modal.module.scss";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = document.querySelector("#modal")!;

const Modal: React.FC = ({ children }) => {
  const dispatch = useAppDispatch();
  const element = document.createElement("div");

  useEffect(() => {
    root.append(element);

    return () => {
      element.remove();
    };
  });

  return createPortal(
    <div className={classes.modal}>
      {children}
      <button
        type="button"
        onClick={() => dispatch(closeModal())}
        className={classes.modalClose}
      >
        <AiOutlineClose size={25} />
      </button>
    </div>,
    element
  );
};

export default Modal;
