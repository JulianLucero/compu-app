import React, {useState} from 'react';
import { Link, useHistory } from "react-router-dom";
import ItemCount from './ItemCount';
import useCartContext from "../context/CartContext";


export default function ItemDetail(props) {
  const {addItem,isInCart,qtyInCart, products} = useCartContext();

  const navig = useHistory();

  function onAdd (value){
    console.log('Valor llamado: ' , value);
    isInCart(props.id)?
    alert(`Ya agregaste item al carrito.`)
    :addItem(props,value);
  }

  console.log(props)
  return (
   <div id={props.id}>
      
      <h3>{props.name}</h3>
      <h4>${props.precio}</h4>
      <img alt="" src={props.thumbnailUrl}/> 
      <p className="description">{props.description}</p>
      <p><small>Nos quedan {props.stock} unidades</small></p>
      {!isInCart (props.id)?
      <ItemCount 
        onAdd ={onAdd} 
        initial={1} 
        stock= {props.stock}
        />
        :
        <div>
        <button 
                  className="flex mx-auto mt-2 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
                  <Link to="/cart">Finalizar compra</Link>
              </button>
            <div >                      
              <span>
                    Ya cargaste {qtyInCart(props.id)} en el carrito
              </span>                 
              </div>    
        </div>      
            }
        <button
          onClick={() => navig.go(-1)}
          
        >
          Volver
        </button>    
   </div>

   
   
  )
}