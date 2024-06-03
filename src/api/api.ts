import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { RootState } from "../store"

const BASE_URL = import.meta.env.VITE_BASE_URL

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token

    if (token) {
      headers.set("authorization", `Bearer ${token}`)
    }

    return headers
  },
})

//const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 })

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQuery,
  refetchOnMountOrArgChange: true,
  endpoints: () => ({}),
})
