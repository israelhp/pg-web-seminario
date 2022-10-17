/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'

const saveOrder = async (name, nit, paymentType, card, codeCard, securityCode, expirationDate, direccion, amount, CartList, userId) => {
  try {
    // SAVE PAYMENT BEFORE ORDER
    const data = await axios.post(`${process.env.REACT_APP_API_URL}/Payments`, {
      name,
      paymentType,
      card,
      codeCard,
      securityCode,
      expirationDate,
      amount,
    });

    // SAVE ORDER NEXT TO PAYMENT
    const data2 = await axios.post(`${process.env.REACT_APP_API_URL}/Orders`, {
      currency: 'QTZ',
      nit,
      name,
      observations: '',
      date: new Date(),
      OrderDetails: CartList,
      userId,
      PaymentId: data.data.data.id,
    })
    return data2
  } catch (e) {
    return e.response
  }
}

export default saveOrder
