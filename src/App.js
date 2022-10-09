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
import NavBar from './components/NavBar/NavBar'
import { useEffect,useState } from 'react'

function App() {


  return (
    <div className="">
      <Provider store={store}>
        <Routes>
          <Route index path="/" element={<Root />} />
          <Route path="accounts" element={<LayoutAccounts />}>
            <Route index element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>
          <Route path="articulos" element={<GetProducts />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Provider>
    </div>
  )
}

export default App
