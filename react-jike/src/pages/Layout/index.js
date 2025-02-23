import { Layout, Menu, Popconfirm } from 'antd'
import {useStore} from '@/store'
import {
  HomeOutlined,
  DiffOutlined,
  EditOutlined,
  LogoutOutlined
} from '@ant-design/icons'
import './index.scss'
import { Link,Outlet,useLocation,useNavigate} from 'react-router-dom'
import { useEffect } from 'react'

const { Header, Sider } = Layout

const GeekLayout = () => {
   const location = useLocation()
  const selectedKey = location.pathname
 const { userStore,loginStore} = useStore()
  const navigate = useNavigate()
  //请求用户名字api不可用
  // useEffect(() => {
  //     userStore.getUserInfo()
  // }, [userStore])

const onLogout = () => {
    loginStore.loginOut()
    navigate('/login')
}
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <div className="user-info">
          <span className="user-name">{userStore.userInfo.name}</span>
          <span className="user-logout">
            <Popconfirm title="是否确认退出？" okText="退出" cancelText="取消" onConfirm={onLogout}>
              <LogoutOutlined /> 退出
            </Popconfirm>
          </span>
        </div>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            theme="dark"
            selectedKeys={[selectedKey]}
            style={{ height: '100%', borderRight: 0 }}
          >
            <Menu.Item icon={<HomeOutlined />} key="/">
              <Link to="/">数据概览</Link>
            </Menu.Item>
            <Menu.Item icon={<DiffOutlined />} key="/article">
              <Link to="/article">内容管理</Link>
            </Menu.Item>
            <Menu.Item icon={<EditOutlined />} key="/publish">
               <Link to="/publish">发布文章</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="layout-content" style={{ padding: 20 }}><Outlet/></Layout>
      </Layout>
    </Layout>
  )
}

export default GeekLayout