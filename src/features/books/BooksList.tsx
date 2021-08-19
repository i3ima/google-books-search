import React from "react";
import { useAppSelector } from "../../lib/hooks";
import { AiOutlineLoading } from 'react-icons/ai'
import ErrorMessage from "components/ui/ErrorMessage";
import BookCard from "../../components/BookCard";

const BooksList: React.FC = () => {
 const booksState = useAppSelector(state => state.books)

 if (booksState.loading === 'pending') return <AiOutlineLoading className="origin-center animate-spin h-24 w-24" />
 if (booksState.error) return <ErrorMessage reason={booksState.error} />

 return (
		 <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
			{booksState.fetchedBooks.map(({ volumeInfo, id }) => !!volumeInfo ? <BookCard key={id} {...volumeInfo}/> : null)}
		 </div>
 )
}

export default BooksList