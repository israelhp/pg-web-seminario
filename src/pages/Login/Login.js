/* eslint-disable no-unused-vars */
import '../../styles/styles.css'
import { Link, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useAuth from '../../hooks/useAuth'
import { loginAuth } from '../../redux/states/auth'

const Login = () => {
  const navigate = useNavigate()
  const [error, setError] = useState(0)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, res, load } = useAuth()
  const authState = useSelector(store => store.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    if (authState.token !== null) navigate('/')
  }, [authState])

  const onClick = e => {
    e.preventDefault()
    login(email, password, setError).then(response => {
      dispatch(
        loginAuth({
          token: response.token,
          role: `${response.role}`,
          userId: response.userId,
        }),
      )
    })
  }

  return (
    <section className="vh-100">
      <Container fluid className="h-custom">
        <Row className="d-flex justify-content-center align-items-center h-100">
          <Col md={8} lg={6} xl={4}>
            <Container fluid className="mb-3">
              <Row>
                <Col>
                  <h1 className="text-center text-primary"> Iniciar sesion </h1>
                </Col>
              </Row>
            </Container>
            <Form onSubmit={onClick}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  required
                  type="email"
                  placeholder="Correo electronico"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  required
                  type="password"
                  placeholder="Contraseña"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </Form.Group>
              {error === 1 ? (
                <Alert className="mt-4" variant="danger">
                  <p>{res.message}</p>
                </Alert>
              ) : (
                ''
              )}
              <div className="mt-4 pt-2">
                <Container>
                  <Row>
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={load === 1 ? true : 0}
                    >
                      Iniciar sesion
                    </Button>
                  </Row>
                </Container>
                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0"></p>
                </div>
                <p className="medium fw-bold mt-2 pt-1 mb-0 text-center">
                  ¿Tienes tu cuenta?{' '}
                  <Link to="signup" className="link-danger">
                    Registrate
                  </Link>
                </p>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
      <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
        <div>
          <a href="#!" className="text-white me-4">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#!" className="text-white me-4">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#!" className="text-white me-4">
            <i className="fab fa-google"></i>
          </a>
          <a href="#!" className="text-white">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Login
