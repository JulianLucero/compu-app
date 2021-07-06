import React, {useState} from 'react';
import { Link, useHistory } from "react-router-dom";
import ItemCount from './ItemCount';
import useCartContext from "../context/CartContext";


export default function ItemDetail(props) {
  const {addItem,isInCart,qtyInCart} = useCartContext();

  const navig = useHistory();

  function onAdd (value){
    console.log('Valor llamado: ' , value);
    isInCart(props.id)?
    alert(`Ya agregaste item al carrito.`)
    :addItem(props.id,value);
  }

  console.log(props)
  return (
   <div id={props.id}>
      
      <h3>{props.name}</h3>
      <h4>${props.precio}</h4>
      <img src={props.thumbnailUrl}/> 
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
        <button> 
                
                Finalizar compra
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