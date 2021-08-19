import React from 'react';
import Button from "components/ui/buttons/Button";
import { useAppDispatch, useAppSelector } from "lib/hooks";
import { loadMoreByOptions } from "features/books/booksSlice";
import { AiOutlineLoading } from 'react-icons/ai'

const LoadMore: React.FC = () => {
 const [fetchedBooks, total, page, loading] = useAppSelector(state => [state.books.fetchedBooks, state.books.totalItems,
	state.books.searchOptions.page, state.books.loading])
 const dispatch = useAppDispatch()

 if (fetchedBooks.length < 1 || page * 30 > total) return null

 return (
		 <Button disabled={loading === 'pending'} className="w-full flex justify-center" onClick={() => dispatch(loadMoreByOptions())}>
			{loading === 'pending' ? <AiOutlineLoading className="origin-center animate-spin h-8 w-8" /> : 'Load More'}
		 </Button>
 );
};

export default LoadMore;