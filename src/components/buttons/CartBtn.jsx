import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const CartBtn = () => {
    return (
        <>
            <Link to='/cart' className="btn btn-outline-primary mx-2">
                <FontAwesomeIcon icon={faShoppingCart} className='me-2' />
                Cart(0)
            </Link>
        </>
    )
}

export default CartBtn