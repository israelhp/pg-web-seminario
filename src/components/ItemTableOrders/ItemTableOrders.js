/* eslint-disable no-unused-vars */
import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import useOrder from '../../hooks/useOrder'
import { useDispatch, useSelector } from 'react-redux'

const ItemTableOrders = props => {
  const [show, setShow] = useState(false)
  const [detail, setDetail] = useState(null)
  const { putOrders, getOrdersDetails } = useOrder()
  const authState = useSelector(store => store.auth)

  const handleClose = () => setShow(false)

  const handleShow = () => {
    getOrdersDetails(props.order.id).then(res => {
      setDetail(res)
    })
    setShow(true)
  }

  const handleStatusOrder = async () => {
    await putOrders(props.order.id, 2, authState.userId)
  }

  return (
    <>
      <tr>
        <th scope="row">{props.order.id}</th>
        <td>{props.order.name}</td>
        <td>{props.order.nit}</td>
        <td>{props.order.date}</td>
        <td>
          <button
            type="button"
            className="btn btn-primary"
            style={{ marginLeft: 5, marginRight: 5 }}
            onClick={handleShow}
          >
            <i className="fa fa-eye"></i>
          </button>
          <button
            type="button"
            className="btn btn-success"
            style={{ marginLeft: 5, marginRight: 5 }}
            onClick={handleStatusOrder}
          >
            <i className="fa fa-edit"></i>
          </button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Detalle de la Orden</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {detail === null
                    ? ''
                    : detail.map(detail => {
                        return (
                          <tr key={detail.key}>
                            <td>{detail.name}</td>
                            <td>{detail.amount}</td>
                            <td>{detail.price.toFixed(2)}</td>
                            <td>{detail.total.toFixed(2)}</td>
                          </tr>
                        )
                      })}
                </tbody>
              </Table>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </td>
      </tr>
    </>
  )
}

export default ItemTableOrders
