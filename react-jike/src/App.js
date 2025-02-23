// 导入路由
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthRoute } from '@/components/AuthRoute'
import  Home  from './pages/Home'
import  Article  from './pages/Article'
import  Publish  from './pages/Publish'
// 导入页面组件
import Login from './pages/Login'
import Layout from './pages/Layout'
import{HistoryRouter,history } from '@/utils/history'
// 配置路由规则
function App() {
  return (
    <HistoryRouter history={history}>
      <div className="App">
       <Routes>
            <Route path="/*" element={
              //<AuthRoute>
              <Layout/>
              //</AuthRoute>
              }>
                <Route index element={<Home />} />
                <Route path="article" element={<Article />} />
                <Route path="publish" element={<Publish />} />
                </Route>
            <Route path="/login" element={<Login/>}/>
        </Routes>
      </div>
    </HistoryRouter>
  )
}

export default App