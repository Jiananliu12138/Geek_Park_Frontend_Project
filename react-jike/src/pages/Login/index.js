import logo from '@/assets/logo.png'
import './index.scss'
import { Button, Checkbox, Form, Input ,Card ,Alert} from 'antd';
import { useStore } from '@/store/index.js'
import { useNavigate } from 'react-router-dom';
import {  useState } from 'react';
import { convertLegacyProps } from 'antd/es/button';
const Login = () => {
  const[state, setState] = useState(true)
  const navigate = useNavigate()
  const { loginStore } = useStore()

  const onFinish = async (values) => {
  const { mobile, code} = values
  try {
    await loginStore.login({mobile, code})
    navigate('/')
  } catch (e) {
    setState(false)
    console.log(e)
  }
}
const onClose = () => {setState(true)}
  return (
    <div className="login">
      <Card className="login-container">
        <img className="login-logo" src={logo} alt="" />
        {/* 登录表单 */}
      <Form validateTrigger={['onBlur', 'onChange']} 
      initialValues={{
      mobile: "13888888888",
      code: "246810",
      remember: true
  }}
      onFinish={ onFinish }
      >

      <Form.Item
      name="mobile"
        rules={[
          {
            pattern: /^1[3-9]\d{9}$/,
            message: '手机号码格式不对',
            validateTrigger: 'onBlur'
          },
          { required: true, message: '请输入手机号' }
        ]}
      >
        <Input size="large" placeholder="请输入手机号" />
      </Form.Item>
      <Form.Item
      name="code"
        rules={[
          { len: 6, message: '验证码6个字符', validateTrigger: 'onBlur' },
          { required: true, message: '请输入验证码' }
        ]}
      >
        <Input size="large" placeholder="请输入验证码" />
      </Form.Item>
      <Form.Item name="remember" valuePropName="checked">
        <Checkbox className="login-checkbox-label">
          我已阅读并同意「用户协议」和「隐私条款」
        </Checkbox>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" size="large" block>
          登录
        </Button>
      </Form.Item>
      <Form.Item></Form.Item>
      {!state&&(<Form.Item>
        <Alert
      message="输入了错误的信息请重试"
      description="请仔细检查手机号和验证码"
      type="error"
      closable
       onClose={onClose}
    />
        </Form.Item>)}
      </Form>
      </Card>
    </div>
  )
}

export default Login