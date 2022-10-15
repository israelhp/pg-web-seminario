import { useCallback, useState } from 'react'
import loginService from '../services/login'
import logoutService from '../services/logout'
import { persistAuthState, removeLocalStorage } from '../utilities/persistInfo'

const useAuth = () => {
  const [res, setRes] = useState({ message: '' })
  const [load, setLoad] = useState(0)

  const login = useCallback(async (email, password, setError) => {
    setLoad(1)
    const data = await loginService(email, password)
      .then(res => {
        switch (res.status) {
          case 201:
            setRes({ message: res.data.message })
            persistAuthState('token', res.data.data.token)
            persistAuthState('role', res.data.data.role)
            persistAuthState('userId', res.data.data.id)
            setLoad(0)
            setError(2)
            break
          case 400:
            setRes({ message: res.data.message })
            setLoad(0)
            setError(1)
            break
        }
        return res.data.data
      })
      .catch(e => {
        setLoad(0)
        setError(1)
      })
    return data
  })

  const logout = useCallback((token, setError) => {
    setLoad(1)
    logoutService(token, setError)
      .then(res => {
        switch (res.status) {
          case 200:
            setRes({ message: res.data.message })
            removeLocalStorage('token')
            removeLocalStorage('role')
            removeLocalStorage('userId')
            removeLocalStorage('Carrito')
            setLoad(0)
            setError(2)
            break
          default:
            setRes({ message: res.data.message })
            setLoad(0)
            setError(1)
        }
        return res.data.data
      })
      .catch(e => {
        setLoad(0)
        setError(1)
      })
  })
  return {
    res,
    login,
    logout,
    load,
  }
}

export default useAuth
