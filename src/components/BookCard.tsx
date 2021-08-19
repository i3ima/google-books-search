import React from "react";
import { VolumeInfo } from "types";
import Heading from "components/ui/typography/Heading";
import Paragraph from "components/ui/typography/Paragraph";
import Underline from "components/ui/typography/Underline";
import { useAppDispatch } from "lib/hooks";
import { selectBook } from "features/books/booksSlice";
import { showModal } from "../features/modal/modalSlice";
import Thumbnail from "./ui/image/Thumbnail";

interface IProps extends VolumeInfo {
}

const BookCard: React.FC<IProps> = (vInfo) => {
 const dispatch = useAppDispatch()
 const { imageLinks, categories, title, authors } = vInfo

 const onCardClick = () => {
	dispatch(selectBook(vInfo))
	dispatch(showModal())
 }
 return (
		 <div onClick={onCardClick}
					className="transition cursor-pointer min-h-96 bg-gray-600 p-2 rounded-lg flex items-center flex-col space-y-4 hover:bg-gray-500">
			<Thumbnail className="w-48 h-56" src={imageLinks?.large || imageLinks?.thumbnail} />
			<div className="w-full flex flex-col ">
			 <Underline>
				{categories ? categories[0] : 'No categories'}
			 </Underline>
			 <Heading className="text-lg">
				{title}
			 </Heading>
			 <Paragraph>
				{authors ? authors.join(', ') : 'No authors'}
			 </Paragraph>
			</div>
		 </div>
 )
}

export default BookCard