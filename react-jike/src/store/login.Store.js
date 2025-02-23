import { makeAutoObservable } from "mobx"
import { http,setToken, getToken,clearToken} from '@/utils'
class LoginStore {
  token  = getToken() || ''
  constructor() {
    makeAutoObservable(this)
  }
  // 登录
  login = async ({ mobile, code }) => {
    const res = await http.post('http://geek.itheima.net/v1_0/authorizations', {
      mobile,
      code
    })
    this.token = res.data.token
    console.log(res)
    setToken(res.data.token)
  }
  loginOut = () => {
    this.token = ''
    clearToken()
  }
}
export default LoginStore