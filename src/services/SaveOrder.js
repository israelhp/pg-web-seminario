/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'

const saveOrder = async (name, nit, PaymentId) => {

  const cartState = useSelector(store => store.cart)
  useEffect(() => { }, [cartState])

  let CartList = []

  if (cartState.Lista !== null) {
    CartList = Object.values(cartState.Lista)
  } else {
    CartList = []
  }

  try {
    const data = await axios.post(`${process.env.REACT_APP_API_URL}/Orders`, {
        currency: 'QTZ',
        nit,
        name,
        observations: '',
        date: new Date(),
        OrderDetails: CartList, 
        userId: 1,   
        PaymentId,
    })
    return data
  } catch (e) {
    return e.response
  }
}

export default saveOrder
