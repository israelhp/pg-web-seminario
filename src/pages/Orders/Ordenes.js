/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
// import { Navbar } from 'react-bootstrap';
import gato from '../../assets/svg/gatiko.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { formatCurrency } from '../../utilities/formatCurrency';
import { CartSet, CartSum, CartDel } from '../../redux/states/Cart'
import { persistCartState, removeLocalStorage } from '../../utilities/persistInfo'



export const Ordenes = (props) => {

    return (

            <div className="row row-col-1">
                <div className='col-3 card'>
                    <p>{props.chars.id} </p>
                </div>
                <div className='col-3 card'>
                    <p>{props.chars.name} </p>
                </div>
                <div className='col-3 card'>
                    <p>{ props.chars.date} </p>
                </div>
                <div className='col-3 card'>
                    <p>{props.chars.nit} </p>
                </div>
            </div>

    )
}

