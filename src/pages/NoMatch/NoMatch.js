import './NoMatch.css'
import '../../styles/styles.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const NoMatch = () => {
  return (
    <Container fluid className="vh-100">
      <Row className="d-flex justify-content-center align-items-center h-100">
        <Col md={8} lg={6} xl={4}>
          <Row className="d-flex justify-content-center align-items-center">
            <Col className="fof text-center">
              <h1 className="text-primary">404</h1>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center align-items-center">
            <p className="medium fw-bold mb-0 text-center text-primary">
              ¡La página que solicitó no se encontró!
            </p>
          </Row>
          <Row className="d-flex justify-content-center align-items-center">
            <p className="small fw-bold mt-2 pt-1 mb-0 text-center">
              <span>Para ir al inicio preciona </span>
              <a href="/" className="text-danger">
                aqui
              </a>
            </p>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default NoMatch
