import React from 'react'
import {Nav} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


function CartWidget(props) {
    return (
        <div>
            <FontAwesomeIcon icon={faShoppingCart} />
        </div>
    )
}

export default CartWidget





{/*import React from 'react'
import {Nav} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function CartWidget(props) {

    const element = <FontAwesomeIcon icon={fa-opencart} />
    
}

export default CartWidget*/}