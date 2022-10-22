/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux'
import NavBar from '../../components/NavBar/NavBar'
import Carousel from 'react-bootstrap/Carousel'
import Carrucel1 from '../../assets/img/jpg/carrusel_1.jpg'
import Carrucel2 from '../../assets/img/jpg/carrusel_2.jpg'
import Carrucel3 from '../../assets/img/jpg/carrusel_3.jpg'
import Carrucel4 from '../../assets/img/jpg/carrusel_4.jpg'
import Carrucel5 from '../../assets/img/jpg/carrusel_5.jpg'
import Carrucel6 from '../../assets/img/jpg/carrusel_6.jpg'
import Carrucel7 from '../../assets/img/jpg/carrusel_7.jpg'
import Carrucel8 from '../../assets/img/jpg/carrusel_8.jpg'
import Carrucel9 from '../../assets/img/jpg/carrusel_9.jpg'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import './Home.css'
import { useEffect, useState } from 'react'
import useProducts from '../../hooks/useProducts'

const Home = () => {
  const [products, setProducts] = useState(null)
  const { getProducts } = useProducts()

  useEffect(() => {
    getProducts().then(res => {
      setProducts(res)
    })
  }, [products])
  // products !== null : products.map() ? ""

  return (
    <>
      <Container fluid className="mb-5">
        <Row>
          <Carousel>
            <Carousel.Item className="carrucel">
              <Image
                className="d-block carrucel-image"
                src={Carrucel3}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>El silencio es el sonido de una buena comida </h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carrucel">
              <Image
                className="d-block carrucel-image"
                src={Carrucel1}
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>
                  Una receta no tiene alma. Es el cocinero quien debe darle alma
                  a la receta
                </h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carrucel">
              <Image
                className="d-block carrucel-image"
                src={Carrucel2}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>
                  Una comida bien preparada tiene sabores delicados que hay que
                  retener en la boca para apreciarlos
                </h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container>
      <Container className="mb-4">
        <div className="row">
          {products === null
            ? ''
            : products.map((product, index) => {
                if (index < 6) {
                  return (
                    <div className="col-md p-4" key={product.id}>
                      <Card style={{ width: '18rem' }}>
                        <Card.Img
                          className="card-image blob-to-image"
                          variant="top"
                          src={'data:image/png;base64,' + product.Image}
                        />
                        <Card.Body>
                          <Card.Title>{product.name}</Card.Title>
                          <Card.Text>{product.description}</Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                  )
                } else return ''
              })}
        </div>
      </Container>
      <Container>
        <Row>
          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0"></p>
          </div>
        </Row>
      </Container>
      <Container>
        {products === null
          ? ''
          : products.map((product, index) => {
              if (index > 6) {
                if (index % 2 === 0) {
                  return (
                    <>
                      <Row className="featurette mb-5 mt-5" key={product.id}>
                        <Col className="col-md-7 order-md-2 d-flex align-items-center justify-content-center flex-column">
                          <h2 className="featurette-heading">
                            {product.name}
                            <span className="text-muted">
                              {' '}
                              Precio Q{product.salePrice}
                            </span>
                          </h2>
                          <p className="lead">{product.description}</p>
                        </Col>
                        <Col className="col-md-5 order-md-1">
                          <img
                            className="featurette-image img-fluid mx-auto blob-to-image"
                            src={'data:image/png;base64,' + product.Image}
                            alt="Generic placeholder image"
                          />
                        </Col>
                      </Row>
                      <Row>
                        <div className="divider d-flex align-items-center my-4">
                          <p className="text-center fw-bold mx-3 mb-0"></p>
                        </div>
                      </Row>
                    </>
                  )
                } else {
                  return (
                    <>
                      <Row className="featurette mb-5 mt-5">
                        <Col className="col-md-7 order-md-1 d-flex align-items-center justify-content-center flex-column">
                          <h2 className="featurette-heading">
                            {product.name}
                            <span className="text-muted">
                              {' '}
                              Precio Q{product.salePrice}
                            </span>
                          </h2>
                          <p className="lead">{product.description}</p>
                        </Col>
                        <Col className="col-md-5 order-md-2">
                          <img
                            className="featurette-image img-fluid mx-auto blob-to-image"
                            src={'data:image/png;base64,' + product.Image}
                            alt="Generic placeholder image"
                          />
                        </Col>
                      </Row>
                      <Row>
                        <div className="divider d-flex align-items-center my-4">
                          <p className="text-center fw-bold mx-3 mb-0"></p>
                        </div>
                      </Row>
                    </>
                  )
                }
              }
              return ''
            })}
      </Container>
      <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
        <div></div>
      </div>
    </>
  )
}

export default Home
