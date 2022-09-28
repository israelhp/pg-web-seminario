/* eslint-disable no-unused-vars */
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import useAuth from '../../hooks/useAuth'
import { useDispatch, useSelector } from 'react-redux'
import { logoutAuth } from '../../redux/states/auth'

const NavBarData = () => {
  const { logout } = useAuth()
  const authState = useSelector(store => store.auth)
  const dispatch = useDispatch()
  const [error, setError] = useState(0)

  const onClickLogin = e => {
    logout(authState.token, setError)
    dispatch(logoutAuth({ token: null, role: null }))
  }
  return (
    <Navbar bg="light" expand="lg">
      <Container className="px-4 px-lg-5">
        <Link className="navbar-brand" href="../">
          Venta
        </Link>
        <Button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </Button>
        <Navbar.Collapse>
          <Nav className="me-auto mb-2 mb-lg-0 ms-lg-4">
            {authState.role === '1' ? (
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
                    Perfil
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
          <button className="btn btn-outline-dark" type="submit">
            <i className="bi-cart-fill me-1"></i>
            Carrito
            <span className="badge bg-dark text-white ms-1 rounded-pill">
              0
            </span>
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBarData
