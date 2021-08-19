import React from "react";
import { useAppSelector } from "../../lib/hooks";
import { AiOutlineLoading } from 'react-icons/ai'
import ErrorMessage from "components/ui/ErrorMessage";
import BookCard from "features/modal/BookCard";
import Paragraph from "components/ui/typography/Paragraph";
import BookModal from "features/modal/BookModal";

const BooksList: React.FC = () => {
 const booksState = useAppSelector(state => state.books)
 const isModalOpen = useAppSelector(state => state.modal.open)

 if (booksState.totalItems < 1 && booksState.loading !== 'pending') return null
 if (booksState.loading === 'pending' && booksState.searchOptions.page < 1) return (
		 <div className="h-96">
			<AiOutlineLoading className="origin-center animate-spin h-24 w-24" />
		 </div>)
 if (booksState.error) return <ErrorMessage reason={booksState.error} />

 return (
		 <>
			<Paragraph className="text-center">
			 Found {booksState.totalItems} books
			</Paragraph>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full h-full">
			 {booksState.fetchedBooks.map(({ volumeInfo}, index) => !!volumeInfo ?
					 <BookCard key={index + 1} {...volumeInfo} /> : null)}
			</div>
			{isModalOpen ? <BookModal /> : null}
		 </>
 )
}

export default BooksList