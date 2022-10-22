/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
// import { Navbar } from 'react-bootstrap';
import gato from '../../assets/svg/gatiko.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { formatCurrency } from '../../utilities/formatCurrency'
import { CartSet, CartSum, CartDel } from '../../redux/states/Cart'

export const Ordenes = props => {
  const getEstatus = estado => {
    switch (estado) {
      case 1:
        return 'INGRESADO'
      case 2:
        return 'ASIGNADO'
      case 3:
        return 'PREPARANDO'
      case 4:
        return 'EN CAMINO'
      case 5:
        return 'ENTREGADO'
    }
  }

  return (
    <div className="row row-col-1">
      <div className="col-3 card">
        <p>{props.chars.id} </p>
      </div>
      <div className="col-3 card">
        <p>{props.chars.name} </p>
      </div>
      <div className="col-3 card">
        <p>{props.chars.date} </p>
      </div>
      <div className="col-3 card">
        <p>{getEstatus(props.chars.estado)} </p>
      </div>
    </div>
  )
}
