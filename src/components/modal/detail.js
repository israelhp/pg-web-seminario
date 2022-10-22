/* eslint-disable no-unused-vars */
import { formatCurrency } from '../../utilities/formatCurrency';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import {CartSet, CartSum, CartDel} from '../../redux/states/Cart'

export const CartDetail = (props) => {
    const cartState = useSelector(store => store.cart)
    const dispatch = useDispatch()

    const DeteleFromCart = e => {
        dispatch(CartDel({ id: props.chars.id, quantity:props.chars.quantity , name:props.chars.name, price: props.chars.salePrice }))
    }

    return (
        <div className='row' >
            <p className='col-1' style={{alignContent:"center", padding: "0px"}}><Button variant="outline-danger" className='btn-sm' style={{float:"right", top:"-5px"}}  onClick={DeteleFromCart}>X</Button></p>
            <p className='col-5'>{props.chars.name}</p>
            <p className='col-2' style={{textAlign:"center"}}>{props.chars.quantity}</p>
            <p className='col-4' style={{textAlign:"center"}}>{formatCurrency(props.chars.price)}</p>
        </div>
    )
}

export default CartDetail