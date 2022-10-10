/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
// import { Navbar } from 'react-bootstrap';
import gato from '../../assets/svg/gatiko.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { formatCurrency } from '../../utilities/formatCurrency';
import { CartSet, CartSum, CartDel } from '../../redux/states/Cart'
import { persistCartState, removeLocalStorage } from '../../utilities/persistInfo'



export const Articulos = (props) => {
    const cartState = useSelector(store => store.cart)
    const dispatch = useDispatch()

    if (cartState.Lista !== null) {
        persistCartState('Carrito', JSON.stringify(Object.values(cartState.Lista)))
    }
    let quantity

    useEffect(() => { }, [cartState])

    if (cartState.Lista === null) {
        quantity = 0
    } else {
        const index = cartState.Lista.findIndex((articulo) => articulo.id === props.chars.id)
        if (index >= 0) {
            quantity = cartState.Lista[index].quantity
        } else {
            quantity = 0;
        }
        // .filter(d => d.id === props.chars.id).inde
    }

    const addToCart = e => {
        quantity += 1
        if (cartState.Lista === null) {
            dispatch(CartSet({ id: props.chars.id, quantity, name: props.chars.name, price: props.chars.salePrice }))
        } else {
            const index = cartState.Lista.findIndex((articulo) => articulo.id === props.chars.id)
            if (index >= 0) {
                dispatch(CartSum({ id: props.chars.id, quantity, name: props.chars.name, price: props.chars.salePrice }))
            } else {
                dispatch(CartSet({ id: props.chars.id, quantity, name: props.chars.name, price: props.chars.salePrice }))
            }
            // .filter(d => d.id === props.chars.id).inde
        }


        /* if(cartState.Lista == null){
            dispatch(CartSet({Lista:[{id:props.chars.id, quantity: 1}]}))
            console.log("if")
        }else{
            dispatch(CartSet({Lista:[...cartState.Lista,{id:props.chars.id, quantity: 1}]}))
            console.log("else")
        } */

    }
    const lessToCart = e => {
        quantity -= 1

        if (quantity === 0) {
            dispatch(CartDel({ id: props.chars.id, quantity }))
        } else {
            const index = cartState.Lista.findIndex((articulo) => articulo.id === props.chars.id)
            if (index >= 0) {
                dispatch(CartSum({ id: props.chars.id, quantity }))
            } else {
                dispatch(CartSet({ id: props.chars.id, quantity }))
            }
        }
    }

    const DeteleFromCart = e => {
        dispatch(CartDel({ id: props.chars.id, quantity, name: props.chars.name, price: props.chars.salePrice }))
    }
    return (
        <div className='col p-4'>
            <div className="card" style={{ width: '18rem' }}>
                <img src={gato} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title fs-2">{props.chars.name} </h5>
                    <h5 className="ms-2 text-muted">{formatCurrency(props.chars.salePrice)} </h5>
                    <p className="card-text"> {props.chars.description}</p>

                    <div className='mt-auto'>
                        {quantity === 0 ? (
                            <div className='d-flex align-items-center flex-column' style={{ gap: ".5rem" }}>
                                <div className='d-flex align-items-center justify-content-center' style={{ gap: ".5rem" }}>
                                    <button className="btn btn-primary" onClick={addToCart} >Agregar al carrito</button>
                                </div>
                            </div>

                        ) :
                            <div className='d-flex align-items-center flex-column' style={{ gap: ".5rem" }}>
                                <div className='d-flex align-items-center justify-content-center' style={{ gap: ".5rem" }}>
                                    <button className="btn btn-primary" onClick={lessToCart} >-</button>
                                    <div>
                                        <span className='fs-3'>{quantity}</span>
                                    </div>
                                    <button className="btn btn-primary" onClick={addToCart}>+</button>
                                </div>
                                <button className="btn btn-danger" onClick={DeteleFromCart} >Eliminar</button>
                            </div>
                        }

                    </div>
                </div>
            </div>
        </div>

    )
}

