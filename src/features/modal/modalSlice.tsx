import { createSlice } from '@reduxjs/toolkit'

interface State {
 open: boolean
}

const initialState: State = {
 open: false
}

export const booksSlice = createSlice({
 name: 'modal',
 initialState,
 reducers: {
	 showModal: (state) => {
	  state.open = true
   },
  closeModal: (state) => {
	  state.open = false
  }
 }
})

export const { closeModal, showModal } = booksSlice.actions

export const modalReducer = booksSlice.reducer
