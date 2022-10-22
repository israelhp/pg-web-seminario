/* eslint-disable no-unused-vars */
import { Container, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import { useEffect, useState } from 'react'
import TableMyOrders from '../../components/TableMyOrders/TableMyOrders'

const MisOrdenes = () => {
  const [option, setOption] = useState(2)

  const onChange = e => {
    setOption(e.target.value)
  }
  useEffect(() => {}, [option])

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Form.Select size="lg" onChange={onChange}>
            <option value="2">ASIGNADO</option>
            <option value="3">PREPARANDO</option>
            <option value="4">EN CAMINO</option>
            <option value="5">ENTREGADO</option>
          </Form.Select>
        </Row>
        <Row className="mt-5">
          <TableMyOrders option={option}></TableMyOrders>
        </Row>
      </Container>
    </>
  )
}

export default MisOrdenes
