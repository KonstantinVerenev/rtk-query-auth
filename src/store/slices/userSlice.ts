import { createSlice } from "@reduxjs/toolkit/react"
import { userApi } from "../../api/userApi"
import type { Admin } from "../../types"
import type { RootState } from ".."

type userState = {
  user: Admin | null
  token: string | null
}

const initialState: userState = {
  user: null,
  token: localStorage.getItem("@token"),
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: builder => {
    builder
      .addMatcher(userApi.endpoints.login.matchFulfilled, (state, action) => {
        state.user = action.payload.user
        state.token = action.payload.token
        localStorage.setItem("@token", action.payload.token)
      })
      .addMatcher(
        userApi.endpoints.getUserByToken.matchFulfilled,
        (state, action) => {
          state.user = action.payload
        },
      )
  },
  // ---------------
  // We can use selectors like this if we dont use redux vite template or just delete selectors rules
  // ---------------
  //selectors: {
  //  selectUser: state => state.user,
  //  selectToken: state => state.token,
  //},
})

// Common practice with selectors
export const selectUser = (state: RootState) => state.auth.user
export const selectToken = (state: RootState) => state.auth.token

export const { logout } = userSlice.actions
export const userReducer = userSlice.reducer
