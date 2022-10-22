import '../../styles/styles.css'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert'
import useResponse from '../../hooks/useRegister'
import { useState } from 'react'

const Signup = () => {
  const { signup, load, res } = useResponse()
  const [error, setError] = useState(0)
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')
  const [dpi, setDpi] = useState('')

  const clean = () => {
    setEmail('')
    setUsername('')
    setPassword('')
    setRole('')
    setDpi('')
  }

  const onClick = e => {
    e.preventDefault()
    signup(email, username, password, role, dpi, setError)
    clean()
  }

  return (
    <section className="vh-100">
      <Container fluid className="h-custom">
        <Row className="d-flex justify-content-center align-items-center h-100">
          <Col md={8} lg={6} xl={4}>
            <Container fluid className="mb-3">
              <Row>
                <Col>
                  <h1 className="text-center text-primary"> Registrar </h1>
                </Col>
              </Row>
            </Container>
            <Form onSubmit={onClick}>
              <Form.Group className="mb-3" controlId="formBasicDpi">
                <Form.Control
                  required
                  type="number"
                  placeholder="DPI"
                  value={dpi}
                  onChange={e => {
                    if (e.target.value.length <= 13) setDpi(e.target.value)
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  required
                  type="email"
                  placeholder="Correo electronico"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Control
                  required
                  type="text"
                  placeholder="Nombre del usuario"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  required
                  type="password"
                  placeholder="Contraseña"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  pattern="[A-Za-z][A-Za-z0-9]*[0-9][A-Za-z0-9]*"
                  title="Una contraseña válida es un conjuto de caracteres, donde cada uno consiste de una letra mayúscula o minúscula, o un dígito. La contraseña debe empezar con una letra y contener al menor un dígito"
                />
              </Form.Group>
              <Form.Select
                required
                className="text-secondary mb-4"
                aria-label="Default select example"
                value={role}
                onChange={e => setRole(e.target.value)}
              >
                <option>Tipo de usuario</option>
                <option value="1">Cliente</option>
                <option value="2">Repartidor</option>
              </Form.Select>
              {error === 1 || error === 2 ? (
                <Alert variant={error === 2 ? 'success' : 'danger'}>
                  <Alert.Heading>
                    {error === 2 ? 'Completado' : 'Error '}
                  </Alert.Heading>
                  <p>{res.message}</p>
                </Alert>
              ) : (
                ''
              )}

              <div className="mt-4 pt-2">
                <Container>
                  <Row>
                    <Button
                      disabled={load === 1 ? true : 0}
                      type="submit"
                      variant="primary"
                      size="lg"
                    >
                      Confirmar
                    </Button>
                  </Row>
                </Container>
                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0"></p>
                </div>
                <p className="medium fw-bold mt-2 pt-1 mb-0 text-center">
                  ¿Quieres ingresar a tu usuario?{' '}
                  <Link to="../" className="link-danger">
                    Inicia sesion
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

export default Signup
