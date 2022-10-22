/* eslint-disable no-unused-vars */
import { useEffect, useState, useRef } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import useOrder from '../../hooks/useOrder'
import { useDispatch, useSelector } from 'react-redux'

const ItemTableMyOrders = props => {
  const [show, setShow] = useState(false)
  const [option, setOption] = useState(props.order.estado)
  const [detail, setDetail] = useState(null)
  const { putOrders, getOrdersDetails } = useOrder()
  const authState = useSelector(store => store.auth)
  const selectOption = useRef()

  useEffect(() => {
    selectOption.current.value = option
  }, [option])

  const handleClose = () => setShow(false)

  const handleShow = () => {
    getOrdersDetails(props.order.id).then(res => {
      setDetail(res)
    })
    setShow(true)
  }

  const onChange = e => {
    setOption(e.target.value)
  }
  const handleStatusOrder = async e => {
    await putOrders(props.order.id, option, authState.userId)
  }

  return (
    <>
      <tr>
        <th scope="row">{props.order.id}</th>
        <td>{props.order.name}</td>
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
        <td>
          <Form.Select size="lg" onChange={onChange} ref={selectOption}>
            <option value="2">ASIGNADO</option>
            <option value="3">PREPARANDO</option>
            <option value="4">EN CAMINO</option>
            <option value="5">ENTREGADO</option>
          </Form.Select>
        </td>
        <th scope="col">
          <button
            type="button"
            className="btn btn-primary"
            style={{ marginLeft: 5, marginRight: 5 }}
            onClick={handleStatusOrder}
          >
            Guardar
          </button>
        </th>
      </tr>
    </>
  )
}

export default ItemTableMyOrders
