import React, { useEffect } from 'react';
import { createPortal } from "react-dom";
import classes from './Modal.module.scss';
import { AiOutlineClose } from 'react-icons/ai'
import { useAppDispatch } from "lib/hooks";
import { closeModal } from "features/modal/modalSlice";

const root = document.getElementById('modal')!

const Modal: React.FC = ({ children }) => {
 const dispatch = useAppDispatch()
 let element = document.createElement('div')

 useEffect(() => {
	root.appendChild(element)

	return () => {
	 root.removeChild(element)
	}
 })

 return createPortal(
		 <div className={classes.modal}>
			{children}
			<button onClick={() => dispatch(closeModal())} className={classes.modalClose}>
			 <AiOutlineClose size={25}/>
			</button>
		 </div>, element)
};

export default Modal;