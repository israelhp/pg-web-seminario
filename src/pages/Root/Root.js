/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux'
import LoginHome from '../LoginHome/LoginHome'
import Home from '../Home/Home'
import { useEffect } from 'react'
import NavBar from '../../components/NavBar/NavBar'

const Root = () => {
  const authState = useSelector(store => store.auth)

  useEffect(() => {}, [authState.token])

  return <>{authState.token === null ? <LoginHome /> : <><NavBar/> <Home /></>}</>
}

export default Root
