/* eslint-disable no-unused-vars */
import { useCallback, useState } from 'react'
import orderServices from '../services/orders'
import { persistAuthState, removeLocalStorage } from '../utilities/persistInfo'

const useOrder = () => {
  const [res, setRes] = useState({ message: '' })
  const [load, setLoad] = useState(0)

  const getOrdersDetails = useCallback(async orderId => {
    setLoad(1)
    const data = await orderServices
      .getDetailOrder(orderId)
      .then(res => {
        switch (res.status) {
          case 201:
            setRes({ message: res.data.data })
            setLoad(0)
            break
          case 400:
            setRes({ message: res.data.message })
            setLoad(0)
            break
        }
        return res.data.data
      })
      .catch(e => {
        setLoad(0)
      })
    return data
  })

  const getOrders = useCallback(async (userid, statusId, setError) => {
    setLoad(1)
    const data = await orderServices
      .getOrders(userid, statusId)
      .then(res => {
        switch (res.status) {
          case 200:
            setRes({ message: res.data.data })
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

  const putOrders = useCallback(async (orderId, newStatus, userId) => {
    setLoad(1)
    const data = await orderServices
      .putOrder(orderId, newStatus, userId)
      .then(res => {
        switch (res.status) {
          case 201:
            setRes({ message: res.data.data })
            setLoad(0)
            break
          case 400:
            setRes({ message: res.data.message })
            setLoad(0)
            break
        }
        return res.data.data
      })
      .catch(e => {
        setLoad(0)
      })
    return data
  })

  return {
    res,
    load,
    getOrders,
    putOrders,
    getOrdersDetails,
  }
}

export default useOrder
