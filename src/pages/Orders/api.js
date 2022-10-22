/* eslint-disable no-unused-vars */
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Ordenes } from './Ordenes'
import useOrder from '../../hooks/useOrder'
import 'bootstrap/dist/css/bootstrap.css'

export const GetOrders = () => {
  const [error, setError] = useState(0)
  const { getOrdersByUserId } = useOrder()
  const [ordenes, setOrdenes] = useState([])

  useEffect(() => {
    getOrdersByUserId(localStorage.getItem('userId')).then(res => {
      setOrdenes(res)
    })
  }, [])

  return (
    <>
      <div className="container p-4">
        <div className="row row-col-1">
          <div className="container p-4 card">
            <div className="row row-col-1">
              <div className="col-3 card">
                <p>{'Orden'} </p>
              </div>
              <div className="col-3 card">
                <p>{'Nombre'} </p>
              </div>
              <div className="col-3 card">
                <p>{'Fecha'} </p>
              </div>
              <div className="col-3 card">
                <p>{'Estado'} </p>
              </div>
            </div>

            {ordenes.map((chars, id) => {
              return <Ordenes key={id} chars={chars} />
            })}
          </div>
        </div>
      </div>
    </>
  )
}
