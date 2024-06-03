import { Navigate, Outlet, useLocation } from "react-router-dom"
import { useAppSelector } from "../store/hooks"
import { selectUser } from "../store/slices/userSlice"

export const PrivateRoute = () => {
  const location = useLocation()
  const user = useAppSelector(selectUser)

  return user ? <Outlet /> : <Navigate to="/login" state={{ from: location }} />
}
