/* eslint-disable no-unused-vars */
import { Route, Routes } from 'react-router-dom'
import LayoutAccounts from './pages/Layouts/LayoutsAccounts/LayoutsAccounts'
import Login from './pages/Login/Login'
import NoMatch from './pages/NoMatch/NoMatch'
import Signup from './pages/Signup/Signup'
import { useSelector, Provider } from 'react-redux'
import store from './redux/store'
import Root from './pages/Root/Root'
// import { Articulos } from './pages/Articles/Articulos'
import { GetProducts } from './pages/Articles/api'
import Home from './pages/Home/Home'
import Profile from './pages/Profile/Profile'

function App() {
  return (
    <div className="">
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route index element={<Home />} />
            <Route path="perfil" element={<Profile />} />
            <Route path="articulos" element={<GetProducts />} />
          </Route>
          <Route path="accounts" element={<LayoutAccounts />}>
            <Route index element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Provider>
    </div>
  )
}

export default App
