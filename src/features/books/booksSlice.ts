import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  SerializedError,
} from "@reduxjs/toolkit";
import {
  BookCategories,
  GoogleBooksResponse,
  SearchOptions,
  Volume,
  VolumeInfo,
} from "types";
import fetchBooks from "lib/api/books";

interface State {
  fetchedBooks: Volume[];
  selectedBook: VolumeInfo | undefined;
  searchOptions: SearchOptions;
  totalItems: number;
  loading: "idle" | "pending";
  error: undefined | SerializedError;
}

const initialState: State = {
  fetchedBooks: [],
  selectedBook: undefined,
  totalItems: 0,
  searchOptions: {
    name: "",
    sortBy: "relevance",
    category: BookCategories.ALL,
    page: 0,
  },
  loading: "idle",
  error: undefined,
};

export const loadMoreByOptions = createAsyncThunk(
  "books/loadMore",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as { books: State };
    const response = await fetchBooks(state.books.searchOptions);
    return ("json" in response
      ? await response.json()
      : undefined) as unknown as GoogleBooksResponse;
  }
);

export const fetchBooksByOptions = createAsyncThunk(
  "books/fetchBooks",
  async (options: SearchOptions) => {
    const response = await fetchBooks(options);
    return ("json" in response
      ? await response.json()
      : undefined) as unknown as GoogleBooksResponse;
  }
);

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setOptions: (state, action: PayloadAction<SearchOptions>) => {
      state.searchOptions = action.payload;
    },
    selectBook: (state, action) => {
      state.selectedBook = action.payload as VolumeInfo;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooksByOptions.fulfilled, (state, action) => {
        if (state.loading === "pending") {
          state.loading = "idle";
          state.totalItems = action.payload.totalItems;
          state.fetchedBooks = action.payload.items;
        }
      })
      .addCase(fetchBooksByOptions.pending, (state) => {
        if (state.loading === "idle") {
          state.loading = "pending";
        }
      })
      .addCase(fetchBooksByOptions.rejected, (state, action) => {
        if (state.loading === "pending") {
          state.loading = "idle";
          state.error = action.error;
        }
      })
      .addCase(loadMoreByOptions.pending, (state) => {
        if (state.loading === "idle") {
          state.loading = "pending";
          state.searchOptions.page += 1;
        }
      })
      .addCase(loadMoreByOptions.fulfilled, (state, action) => {
        if (state.loading === "pending") {
          state.loading = "idle";
          state.totalItems = action.payload.totalItems;
          state.fetchedBooks.push(...action.payload.items);
        }
      });
  },
});

export const { setOptions, selectBook } = booksSlice.actions;

export const booksReducer = booksSlice.reducer;
