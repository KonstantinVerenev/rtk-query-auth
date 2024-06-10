import { configureStore } from "@reduxjs/toolkit"
import { api } from "../api/api"
import { userReducer } from "./slices/userSlice"
import type { Action, ThunkAction } from "@reduxjs/toolkit"

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: userReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware),
  // ---------------
  // 3 way to handle errors - macro level logger
  // ---------------
  // getDefaultMiddleware().concat(api.middleware).concat(errorLogger),
  // ---------------
})

export type AppStore = typeof store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = AppStore["dispatch"]
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>
