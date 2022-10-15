import { useCallback, useState } from 'react'
import SaveOrderService from '../services/SaveOrder'


const useAddOrder = () => {
  const [res, setRes] = useState({ message: '' })
  const [load, setLoad] = useState(0)

  const saveorder = useCallback(
    (name, nit, paymentType, card, codeCard, securityCode, expirationDate, direccion, amount, CartList, setError) => {
      setLoad(1)
      SaveOrderService(name, nit, paymentType, card, codeCard, securityCode, expirationDate, direccion, amount, CartList)
        .then(res => {
          switch (res.status) {
            case 200:
              setRes({ message: res.data.data.id })
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
    saveorder,
    load,
  }
}

export default useAddOrder
