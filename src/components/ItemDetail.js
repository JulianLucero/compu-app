import React from 'react';
import useCartContext from '../context/CartContext';
import ItemCount from './ItemCount';


export default function ItemDetail(props) {
  console.log(props)
  return (
   <div id={props.id}>
      
      <h3>{props.name}</h3>
      <h4>${props.precio}</h4>
      <img src={props.thumbnailUrl}/> 
      <p className="description">{props.description}</p>
      <p><small>Nos quedan {props.stock} unidades</small></p>
      
      <ItemCount initial={1} stock= {props.stock}/>
   </div>
  )
}