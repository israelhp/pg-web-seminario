import { useCallback, useState } from 'react'
import signupService from '../services/signup'

const useResponse = () => {
  const [res, setRes] = useState({ message: '' })
  const [load, setLoad] = useState(0)

  const signup = useCallback(
    (email, username, password, role, dpi, setError) => {
      setLoad(1)
      signupService(email, username, password, role, dpi)
        .then(res => {
          switch (res.status) {
            case 200:
              setRes({ message: res.data.message })
              setLoad(0)
              setError(2)
              break
            case 400:
              setRes({ message: res.data.message })
              setLoad(0)
              setError(1)
              break
          }
        })
        .catch(e => {
          setLoad(0)
          setError(1)
        })
    },
  )

  return {
    res,
    signup,
    load,
  }
}

export default useResponse
