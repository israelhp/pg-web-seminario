/* eslint-disable no-unused-vars */
import './TableOrders.css'
import { useEffect, useState } from 'react'
import useOrder from '../../hooks/useOrder'
import ItemTableOrders from '../ItemTableOrders/ItemTableOrders'

const TableOrders = () => {
  const [error, setError] = useState(0)
  const [orders, setOrders] = useState(null)
  const { getOrders } = useOrder()

  useEffect(() => {
    getOrders(1, 1, setError).then(res => {
      setOrders(res)
    })
  }, [orders])
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">No.Orden</th>
                  <th scope="col">Nombre Cliente</th>
                  <th scope="col">Nit</th>
                  <th scope="col">Fecha</th>
                  <th scope="col">Opciones</th>
                </tr>
              </thead>
              <tbody>
                {orders === null
                  ? ''
                  : orders.map(order => {
                      return (
                        <ItemTableOrders
                          key={order.id}
                          order={order}
                        ></ItemTableOrders>
                      )
                    })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default TableOrders
