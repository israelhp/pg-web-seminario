import { useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const usePermissions = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const validatePermissions = useCallback(authState => {
    if (authState.role === '1') {
      if (location.pathname === '/pedidos' || location.pathname === 'ordenes')
        navigate('/')
    }
    if (authState.role === '2') {
      if (location.pathname === '/articulos') navigate('/')
    }
  })
  return { location, validatePermissions }
}

export default usePermissions
