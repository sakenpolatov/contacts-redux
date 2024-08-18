import contactsReducer from './slices/contactsSlice'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
	reducer: {
		contacts: contactsReducer
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
