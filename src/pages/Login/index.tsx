import { Button, Card, Form, Input } from "antd"
import { useNavigate } from "react-router-dom"
import {
  useLazyGetUserByTokenQuery,
  useLoginMutation,
  type LoginRequest,
} from "../../api/userApi"

export const Login: React.FC = () => {
  const [login] = useLoginMutation()
  const [lazyGetUserByToken] = useLazyGetUserByTokenQuery()
  const navigate = useNavigate()

  const onSubmit = async (loginData: LoginRequest) => {
    const loginResp = await login(loginData)

    if (loginResp.error) {
      // ---------------
      // 1 way to handle errors - response result check
      // ---------------
      // alert("Error")
      // ---------------
      return
    }

    const userResp = await lazyGetUserByToken()

    if (userResp.error) {
      console.log("Error")
      return
    }

    navigate("/")
  }

  return (
    <Card>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onSubmit}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  )
}
