/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import TableOrders from '../../components/TableOrders/TableOrders'

const Orders = () => {
  return (
    <>
      <Container className="mt-5">
        <Row>
          <TableOrders></TableOrders>
        </Row>
      </Container>
    </>
  )
}

export default Orders
