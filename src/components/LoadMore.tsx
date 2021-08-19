import React from 'react';
import Button from "components/ui/buttons/Button";
import { useAppDispatch, useAppSelector } from "lib/hooks";
import { loadMoreByOptions } from "features/books/booksSlice";

const LoadMore: React.FC = () => {
 const fetchedBooks = useAppSelector(state => state.books.fetchedBooks)
 const dispatch = useAppDispatch()

 if (fetchedBooks.length < 1) return null

 return (
     <Button onClick={() => dispatch(loadMoreByOptions())}>
      Load More
     </Button>
 );
};

export default LoadMore;