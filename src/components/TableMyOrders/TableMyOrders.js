/* eslint-disable no-unused-vars */
import '../TableOrders/TableOrders.css'
import { useEffect, useState } from 'react'
import useOrder from '../../hooks/useOrder'
import ItemTableOrders from '../ItemTableOrders/ItemTableOrders'
import ItemTableMyOrders from '../ItemTableMyOrders/ItemTableMyOrders'
import { useDispatch, useSelector } from 'react-redux'

const TableMyOrders = props => {
  const [error, setError] = useState(0)
  const [orders, setOrders] = useState(null)
  const { getOrders } = useOrder()
  const authState = useSelector(store => store.auth)

  useEffect(() => {
    getOrders(authState.userId, props.option, setError).then(res => {
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
                  <th scope="col">Fecha</th>
                  <th scope="col">Detalle</th>
                  <th scope="col">Estado</th>
                  <th scope="col">Confirmar</th>
                </tr>
              </thead>
              <tbody>
                {orders === null
                  ? ''
                  : orders.map(order => {
                      return (
                        <ItemTableMyOrders
                          key={order.id}
                          order={order}
                        ></ItemTableMyOrders>
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

export default TableMyOrders
