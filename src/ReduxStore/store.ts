import { configureStore } from "@reduxjs/toolkit";
import secretWordReducer from './wordSlice'

export const store = configureStore({
  reducer: {
    secretWord: secretWordReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;