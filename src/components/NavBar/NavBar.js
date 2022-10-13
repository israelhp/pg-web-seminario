/* eslint-disable no-unused-vars */
import { Button, Container, Nav, Navbar, NavLink } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import useAuth from '../../hooks/useAuth'
import { useDispatch, useSelector, connect } from 'react-redux'
import { logoutAuth } from '../../redux/states/auth'
import { Articulos } from '../../pages/Articles/Articulos'
import Modal from '../../components/modal/Modal'
import PayModal from '../../components/modal/PayModal'

const NavBarData = () => {
  const cartState = useSelector(store => store.cart)
  const { logout } = useAuth()
  const authState = useSelector(store => store.auth)
  const dispatch = useDispatch()
  const [error, setError] = useState(0)
  useEffect(() => {}, [cartState, authState])

  console.log(authState)

  const onClickLogin = e => {
    logout(authState.token, setError)
    dispatch(logoutAuth({ token: null, role: null }))
  }

  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  const [showPayModal, setShowPayModal] = useState(false)
  const handleShowPayModal = () => {
    setShowPayModal(true)
    setShow(false)
  }
  const handleBack = () => {
    setShowPayModal(false)
    setShow(true)
  }
  const handleClosePayModal = () => setShowPayModal(false)

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container className="px-4 px-lg-5">
          <Link className="navbar-brand" href="../">
            Venta
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="me-auto mb-2 mb-lg-0 ms-lg-4">
              {authState.role === 1 ? (
                <>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/"
                    >
                      Inicio
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="perfil">
                      Perfil
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="articulos" className="nav-link">
                      Articulos
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      href="/"
                    >
                      Inicio
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="#!">
                      Pedidos
                    </Link>
                  </li>
                </>
              )}
            </Nav>
            <button
              onClick={onClickLogin}
              className="btn btn-outline-dark me-2"
              type="submit"
            >
              Cerrar sesion
            </button>
            {authState.role === 1 ? (
              <button
                className="btn btn-outline-dark"
                type="submit"
                onClick={handleShow}
              >
                <i className="bi-cart-fill me-1"></i>
                Carrito
                <span className="badge bg-dark text-white ms-1 rounded-pill">
                  {cartState.Lista === null ? 0 : cartState.Lista.length}
                </span>
              </button>
            ) : (
              <></>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal
        show={show}
        handleClose={handleClose}
        handleShowPayModal={handleShowPayModal}
      />
      <PayModal
        show={showPayModal}
        handleClose={handleClosePayModal}
        handleBack={handleBack}
      />
    </div>
  )
}

export default NavBarData
