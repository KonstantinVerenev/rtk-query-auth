import { Button } from "antd"
import { logout } from "../../store/slices/userSlice"
import { useAppDispatch } from "../../store/hooks"
import { useNavigate } from "react-router-dom"

export const Home: React.FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())
    localStorage.removeItem("@token")
    navigate("/login")
  }

  return (
    <Button type="primary" onClick={handleLogout}>
      Logout
    </Button>
  )
}
