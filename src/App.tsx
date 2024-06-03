import AppRouter from "./router"
import { useGetUserByTokenQuery } from "./api/userApi"
import { useAppSelector } from "./store/hooks"
import { selectToken } from "./store/slices/userSlice"

const App = () => {
  const token = useAppSelector(selectToken)

  const { isLoading } = useGetUserByTokenQuery(undefined, {
    skip: !token,
  })

  if (isLoading) return <div>Loading...</div>

  return <AppRouter />
}

export default App
