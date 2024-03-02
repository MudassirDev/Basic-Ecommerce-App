import React from 'react'
import Items from '../components/cart-components/Items'
import Empty from '../components/cart-components/Empty'
import { cartContext } from '../context/Cart'
import { useContext } from 'react'

function Cart() {
    const value = useContext(cartContext)
    const cart = value.cart
    const setCart = value.setCart

    return (<>
        {cart.length > 0 ? <Items cart={cart} setCart={setCart} /> : <Empty />}
    </>)
}

export default Cart