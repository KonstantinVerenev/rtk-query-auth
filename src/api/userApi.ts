import { api } from "./api"
import type { Admin } from "../types"

interface LoginResponse {
  user: Admin
  token: string
}

export interface LoginRequest {
  email: string
  password: string
}

export const userApi = api.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: loginData => ({
        url: "api/login?expand=shop",
        method: "POST",
        body: loginData,
      }),
      // ---------------
      // 2 way to handle errors - base query error transform
      // ---------------
      //transformErrorResponse: response => {
      //  alert("response: ", response)
      //  return response
      //},
      // ---------------
    }),
    getUserByToken: builder.query<Admin, void>({
      query: () => "admins/me?expand=shop,shop.settings.template",
    }),
  }),
})

export const {
  useLoginMutation,
  useGetUserByTokenQuery,
  useLazyGetUserByTokenQuery,
} = userApi

export const {
  endpoints: { login, getUserByToken },
} = userApi
