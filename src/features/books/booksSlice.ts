import { createAsyncThunk, createSlice, PayloadAction, SerializedError } from '@reduxjs/toolkit'
import { BookCategories, SearchOptions, Volume, VolumeInfo } from "types";
import { fetchBooks } from "lib/api/books";

interface State {
 fetchedBooks: Volume[]
 selectedBook: VolumeInfo | null
 searchOptions: SearchOptions
 totalItems: number
 loading: 'idle' | 'pending'
 error: null | SerializedError
}

const initialState: State = {
 fetchedBooks: [],
 selectedBook: null,
 totalItems: 0,
 searchOptions: {
	name: '',
	sortBy: 'relevance',
	category: BookCategories.ALL,
	page: 0
 },
 loading: 'idle',
 error: null
}

export const loadMoreByOptions = createAsyncThunk(
		'books/loadMore',
		async (_, thunkAPI) => {
		 const state = thunkAPI.getState() as { books: State }
		 const response = await fetchBooks(state.books.searchOptions)
		 return (await response.json())
		}
)

export const fetchBooksByOptions = createAsyncThunk(
		'books/fetchBooks',
		async (options: SearchOptions) => {
		 const response = await fetchBooks(options)
		 return (await response.json())
		})

export const booksSlice = createSlice({
 name: 'books',
 initialState,
 reducers: {
	setOptions: (state, action: PayloadAction<SearchOptions>) => {
	 state.searchOptions = action.payload
	},
	selectBook: (state, action) => {
	 state.selectedBook = action.payload
	}
 },
 extraReducers: builder => {
	builder
			.addCase(fetchBooksByOptions.fulfilled, (state, action) => {
			 state.fetchedBooks = action.payload.items
			 state.totalItems = action.payload.items.length
			 state.loading === 'pending' ? state.loading = 'idle' : null
			})
			.addCase(fetchBooksByOptions.pending, (state) => {
			 state.loading === 'idle' ? state.loading = 'pending' : null
			})
			.addCase(fetchBooksByOptions.rejected, (state, action) => {
			 state.loading === 'pending' ? state.loading = 'idle' : null
			 state.error = action.error
			})
			.addCase(loadMoreByOptions.pending, (state) => {
			 state.searchOptions.page = state.searchOptions.page + 1;
			 state.loading === 'idle' ? state.loading = 'pending' : null
			})
			.addCase(loadMoreByOptions.fulfilled, (state, action) => {
			 state.fetchedBooks.push(...action.payload.items)
			 state.totalItems = state.fetchedBooks.length
			 state.loading === 'pending' ? state.loading = 'idle' : null
			})
 }
})

export const { setOptions, selectBook } = booksSlice.actions

export const booksReducer = booksSlice.reducer
