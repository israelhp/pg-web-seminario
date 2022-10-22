/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux'
import LoginHome from '../LoginHome/LoginHome'
import Home from '../Home/Home'
import { useEffect } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import usePermissions from '../../hooks/usePermissions'

const Root = () => {
  const { location, validatePermissions } = usePermissions()
  const authState = useSelector(store => store.auth)

  useEffect(() => {}, [authState.token, authState.role])
  useEffect(() => {
    validatePermissions(authState)
  }, [location])

  return (
    <>
      {authState.token === null ? (
        <LoginHome />
      ) : (
        <>
          <NavBar />
          <Outlet />
        </>
      )}
    </>
  )
}

export default Root
