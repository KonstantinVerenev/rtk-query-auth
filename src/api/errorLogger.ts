import { isRejectedWithValue } from "@reduxjs/toolkit"
import type { Middleware } from "@reduxjs/toolkit"

type ErrorAction = {
  payload: {
    data:
      | { message: string; status: number }
      | { message: string; status: number }[]
    status: number
  }
  type: string
}

// type predicate function (user-defined type guard)
const isErrorAction = (action: unknown): action is ErrorAction =>
  typeof action === "object" &&
  action !== null &&
  "payload" in action &&
  typeof action.payload === "object" &&
  action.payload !== null &&
  "data" in action.payload &&
  typeof action.payload.data === "object" &&
  action.payload.data !== null &&
  "status" in action.payload &&
  typeof action.payload.status === "number" &&
  "type" in action &&
  typeof action.type === "string"

// logger
export const errorLogger: Middleware = () => next => action => {
  if (isRejectedWithValue(action)) {
    let errorMessage: string | undefined

    if (isErrorAction(action)) {
      if (
        Array.isArray(action.payload.data) &&
        action.payload.data?.[0]?.message
      ) {
        errorMessage = action.payload.data[0].message
      }

      if (!Array.isArray(action.payload.data) && action.payload.data.message) {
        errorMessage = action.payload.data.message
      }

      if (!errorMessage && action.payload.status) {
        errorMessage = `Unknown request error: status ${action.payload.status}`
      }
    }

    if (!errorMessage) {
      errorMessage = "Unknown request error"
    }

    alert(errorMessage)
  }

  return next(action)
}
