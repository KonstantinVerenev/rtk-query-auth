import { Route, Routes } from "react-router-dom"
import { PrivateRoute } from "./PrivateRoute"
import { Home } from "../pages/Home"
import { Login } from "../pages/Login"

const AppRouter = () => {
  return (
    <Routes>
      {/* PRIVATE ROUTES */}
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<Home />} />
      </Route>
      {/* -------------- */}

      {/* PUBLIC ROUTES */}
      <Route path="/login" element={<Login />} />
      {/* ------------- */}
    </Routes>
  )
}

export default AppRouter
