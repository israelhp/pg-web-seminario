import { useCallback, useState } from 'react'
import SavePaymentService from '../services/SavePayment'


const useAddPayment = () => {
  const [res, setRes] = useState({ message: '' })
  const [load, setLoad] = useState(0)

  const savepayment = useCallback(
    (name, nit, paymentType, card, codeCard, securityCode, expirationDate, direccion, amount, setError) => {
      setLoad(1)
      SavePaymentService(name, nit, paymentType, card, codeCard, securityCode, expirationDate, direccion, amount)
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
    savepayment,
    load,
  }
}

export default useAddPayment
