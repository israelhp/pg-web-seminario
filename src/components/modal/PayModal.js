/* eslint-disable no-unused-vars */
import React, { useState, useEffect, Fragment } from 'react'
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { formatCurrency } from '../../utilities/formatCurrency';
import { CartSet, CartSum, CartDel } from '../../redux/states/Cart'
import CartDetail from '../../components/modal/detail'
import useResponse from '../../hooks/useAddPayment'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert'
import useResponseOrder from '../../hooks/useAddOrder'

const ModalData = ({ show, handleClose, handleBack }) => {
    const cartState = useSelector(store => store.cart)
    useEffect(() => { }, [cartState])

    const [checked, setChecked] = useState(false);

    const radios = [
        { name: 'TARJETA', value: '1' },
        { name: 'EFECTIVO', value: '2' },
    ];

    let CartList = []

    if (cartState.Lista !== null) {
      CartList = Object.values(cartState.Lista)
    } else {
      CartList = []
    }

    let amount = 0.00;
    CartList.forEach(function (numero) {
        amount  += numero.price * numero.quantity;
    });

    // FORM CONTENT
    const { savepayment, load, res } = useResponse()
    const { saveorder, loadOrder, resOrder } = useResponseOrder()
    const [error, setError] = useState(0)
    const [name, setName] = useState('')
    const [nit, setNit] = useState('')
    const [paymentType, setPaymentType] = useState('1');
    const [card, setCard] = useState('')
    const [cardName, setCardName] = useState('')
    const [direccion, setDireccion] = useState('')
    const [codeCard, setCodeCard] = useState('1')
    const [securityCode, setSecurityCod] = useState('')
    const [expirationDate, setExpirationDate] = useState('')

    const clean = () => {
        setName('')
        setNit('')
        setPaymentType('')
        setCard('')
        setSecurityCod('')
        setExpirationDate('')
        setDireccion('')
        setCardName('')
    }

    const cleanCard = () => {
        setPaymentType('1')
        setCard('')
        setSecurityCod('')
        setExpirationDate('')
        setCardName('')
    }

    const changePaymentType = e => {
        cleanCard()
        setPaymentType(e.currentTarget.value)   
    }

    const onClick = e => {
        e.preventDefault()
        savepayment(name, nit, paymentType, card, codeCard, securityCode, expirationDate, direccion, amount, setError)
        console.log(res.message)
        saveorder(name, nit, res.message, setError)
        console.log(resOrder.message)
        clean()
    }

    return (
        <Modal show={show} onHide={handleClose} dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title">
            <Modal.Header closeButton>
                <Modal.Title>Informacion de Facturacion</Modal.Title>
            </Modal.Header>
            {/* <Modal.Body>
                <h4>Forma de pago</h4>
                <div style={{ textAlign: "center" }}>
                    <ButtonGroup style={{ width: "-webkit-fill-available" }}>
                        {radios.map((radio, idx) => (
                            <ToggleButton
                                key={idx}
                                id={`radio-${idx}`}
                                type="radio"
                                variant={'outline-success'}
                                name="radio"
                                value={radio.value}
                                checked={radioValue === radio.value}
                                onChange={(e) => setRadioValue(e.currentTarget.value)}
                            >
                                {radio.name}
                            </ToggleButton>
                        ))}
                    </ButtonGroup>
                </div>
                <Fragment>
                    <form className="row">
                        <input type="text" placeholder="Pago" className="form-control" name="Pago" value={radioValue} style={{ visibility: "hidden", height: "0" }}></input>
                        <h4>Informacion de Cliente</h4>
                        <div className="col-md-12">
                            <p>Nombres</p>
                            <input type="text" placeholder="Nombres" className="form-control" name="nombres"></input>
                            <br />
                        </div>
                        <div className="col-md-12">
                            <p>Apellidos</p>
                            <input type="text" placeholder="Apellidos" className="form-control" name="apellidos"></input>
                            <br />
                        </div>
                        <div className="col-md-12">
                            <p>Nit</p>
                            <input type="text" placeholder="Numero de nit" className="form-control" name="nit"></input>
                            <br />
                        </div>
                        <div className="col-md-12">
                            <p>Direccion</p>
                            <input type="text" placeholder="Direccion" className="form-control" name="direccion"></input>
                            <br />
                        </div>
                        {radioValue === '1' ?
                            <>
                                <h4>Informacion de tarjeta</h4>
                                <div className="col-md-12">
                                    <p>Numeracion</p>
                                    <input type="text" placeholder="Numeracion de tarjeta" className="form-control" name="NumCard"></input>
                                    <br />
                                </div>
                                <div className="col-md-12">
                                    <p>Fecha Expiracion</p>
                                    <input type="text" placeholder="Expiracion" className="form-control" name="ExpCard"></input>
                                    <br />
                                </div>
                                <div className="col-md-12">
                                    <p>Nombre</p>
                                    <input type="text" placeholder="Nombre" className="form-control" name="NameCard"></input>
                                    <br />
                                </div>
                                <div className="col-md-12">
                                    <p>Codigo de seguridad</p>
                                    <input type="text" placeholder="CVV" className="form-control" name="CvvCard"></input>
                                    <br />
                                </div>
                            </>
                            :
                            <></>
                        }

                        <button style={{ width: "50%", margin: "auto" }} type="submit" className="btn btn-primary" onClick={handleClose}>Pagar</button>
                    </form>
                </Fragment>
            </Modal.Body> */}

            <Modal.Body>
                <Form onSubmit={onClick}>
                    <Form.Group className="mb-3" controlId="formBasicPaymentType">
                        <h4>Forma de pago</h4>
                        <div style={{ textAlign: "center" }}>
                            <ButtonGroup style={{ width: "-webkit-fill-available" }}>
                                {radios.map((radio, idx) => (
                                    <ToggleButton
                                        key={idx}
                                        id={`radio-${idx}`}
                                        type="radio"
                                        variant={'outline-success'}
                                        name="radio"
                                        value={radio.value}
                                        checked={paymentType === radio.value}
                                        onChange={(e) => changePaymentType(e)}
                                    >
                                        {radio.name}
                                    </ToggleButton>
                                ))}
                            </ButtonGroup>
                        </div>
                    </Form.Group>
                    <h4>Informacion de Cliente</h4>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control
                            required
                            type="text"
                            placeholder="Nombre completo"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicNit">
                        <Form.Control
                            required
                            type="text"
                            placeholder="Numero de nit"
                            value={nit}
                            pattern="((([1-9])+([0-9])*([0-9]|K))|(([1-9]+[0-9]){12,13})|(CF)|^([A-Z0-9]{3,18}))$"
                            title="El nit debe ser valido en la SAT"        
                            onChange={e => setNit(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicDireccion">
                        <Form.Control
                            required
                            type="text"
                            placeholder="Direccion"
                            value={direccion}
                            onChange={e => setDireccion(e.target.value)}
                        />
                    </Form.Group>

                    {paymentType === '1' ?
                        <>
                            <h4>Informacion de tarjeta</h4>
                            <Form.Group className="mb-3" controlId="formBasicCard">
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Numeracion de tarjeta"
                                    value={card}
                                    pattern="(([0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]))"
                                    title="El numero debe ser valido"   
                                    onChange={e => setCard(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCardName">
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Nombre"
                                    value={cardName}
                                    onChange={e => setCardName(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicSecurityCod">
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="CVV"
                                    pattern="(([0-9][0-9][0-9]))"
                                    title="Formato de codigo de seguridad 'XXX' deben ser unicamente numeros"  
                                    value={securityCode}
                                    onChange={e => setSecurityCod(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicExpirationDate">
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="MM/yy"
                                    pattern="(([0-9][0-9][/][0-9][0-9]))"
                                    title="Formato de fecha MM/yy"  
                                    value={expirationDate}
                                    onChange={e => setExpirationDate(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Select
                                required
                                className="text-secondary mb-4"
                                aria-label="Default select example"
                                value={codeCard}
                                onChange={e => setCodeCard(e.target.value)}
                            >
                                <option value="1">VISA</option>
                                <option value="2">MASTERCARD</option>
                            </Form.Select>

                        </>
                        :
                        <></>
                    }

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
                    </div>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleBack}>
                    Volver
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalData
