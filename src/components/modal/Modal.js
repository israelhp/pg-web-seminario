/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { formatCurrency } from '../../utilities/formatCurrency';
import { CartSet, CartSum, CartDel } from '../../redux/states/Cart'
import CartDetail from '../../components/modal/detail'

const ModalData = ({ show, handleClose, handleShowPayModal }) => {

  const cartState = useSelector(store => store.cart)
  useEffect(() => { }, [cartState])

  let CartList = []

  if (cartState.Lista !== null) {
    CartList = Object.values(cartState.Lista)
  } else {
    CartList = []
  }


  let subTotal = 0.00;
  let subTotalArticulos = 0;

  CartList.forEach(function (numero) {
    subTotal += numero.price * numero.quantity;
    subTotalArticulos += numero.quantity;
  });


  return (
    <Modal show={show} onHide={handleClose} dialogClassName="modal-90w"
      aria-labelledby="example-custom-modal-styling-title">
      <Modal.Header closeButton>
        <Modal.Title>Tu carrito de compras</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='container'>
          <div className='row' >
            <p className='col-1'></p>
            <p className='col-5'>NOMBRE</p>
            <p className='col-2' style={{ textAlign: "center" }}>CANTIDAD</p>
            <p className='col-4' style={{ textAlign: "center" }}>PRECIO</p>
          </div>
          {
            cartState.Lista !== null ?
              (cartState.Lista.length !== 0 ? 
                CartList.map((chars, id) => {
                return <CartDetail key={id} chars={chars} />
              })
                :
                <div className='row'>
                  <p className='col-12' style={{ textAlign: "center" }}>
                    <br /><br /><br /><br />Tu carrito de compras esta vacío<br /><br /><br /><br /><br />
                  </p>
                </div>)
              :
              <div className='row'>
                <p className='col-12' style={{ textAlign: "center" }}>
                  <br /><br /><br /><br />Tu carrito de compras esta vacío<br /><br /><br /><br /><br />
                </p>
              </div>
          }
          <div className='row'>
            <div className='col-5'></div>
            <div className='col-3 bg-dark text-center' style={{ height: "1px" }}></div>
            <div className='col-4 bg-dark text-center' style={{ height: "1px" }}></div>
          </div>
          <div className='row' >
            <p className='col-1'></p>
            <p className='col-5 pt-4'>SUBTOTAL</p>
            <p className='col-2 pt-4' style={{ textAlign: "center" }}>{subTotalArticulos}</p>
            <p className='col-4 pt-4' style={{ textAlign: "center" }}>{formatCurrency(subTotal)}</p>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={handleShowPayModal}>
          Confirmar
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalData

/* import Modal from 'react-modal';



    <div classNameNameNameName='modalBackground'>
      <div classNameNameNameName='modalContainer'>
        <button classNameNameNameName='btn btn-danger' onClick={() => closeModal(false)}> X </button>
        <div classNameNameNameName='title'>
          <h1>TU CARRITO DE COMPRAS</h1>
        </div>
        <div classNameNameNameName='body'>
          <p>
            informacion de tu carrito
          </p>
        </div>
        <div classNameNameNameName='footer'>
        <button onClick={() => closeModal(false)}>Cancel</button>
        <button>Checkout</button>
        </div>
      </div>
    </div>


import React from 'react'

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#Modal');

export const ModalComp = () => {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }
  
    return (
      <div>
        <button onClick={openModal}>Open Modal</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel='Example Modal'
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
          <button onClick={closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
      </div>
    );
  }
   */