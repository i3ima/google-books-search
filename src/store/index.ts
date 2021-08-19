import { configureStore } from "@reduxjs/toolkit";
import { booksReducer } from "../features/books/booksSlice";
import { modalReducer } from "../features/modal/modalSlice";

export const store = configureStore({
  reducer: {
    books: booksReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
