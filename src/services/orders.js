/* eslint-disable no-unused-vars */
import axios from 'axios'

const getOrders = async (userId, statusId) => {
  try {
    const data = await axios.get(
      `${process.env.REACT_APP_API_URL}/DeliveriesDefaultOrders?userId=${userId}&statusId=${statusId}`,
    )
    return data
  } catch (e) {
    return e.response
  }
}

const getDetailOrder = async orderId => {
  try {
    const data = await axios.get(
      `${process.env.REACT_APP_API_URL}/OrderDetailByOrderId?orderId=${orderId}`,
    )
    return data
  } catch (e) {
    return e.response
  }
}

const putOrder = async (orderId, newStatus, userId) => {
  const data = await axios.get(
    `${process.env.REACT_APP_API_URL}/DeliveriesByOrderId?orderId=${orderId}`,
  )
  const updateData = await axios.put(
    `${process.env.REACT_APP_API_URL}/Deliveries`,
    {
      id: data.data.data.id,
      orderId: data.data.data.orderId,
      statusId: newStatus,
      userId,
    },
  )
  return { data: 1 }
}
export default { getOrders, putOrder, getDetailOrder }
