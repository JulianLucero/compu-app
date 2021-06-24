import React from 'react';
import ItemCount from './ItemCount';

export default function Item(props) {
  console.log(props)
  return (
   <div id={props.id}>
      <div className="circleUi"/>
      <h3>{props.name}</h3>
      <h4>${props.precio}</h4>
      <img src={props.thumbnailUrl}/> 
      <p className="description">{props.description}</p>
      <p><small>Nos quedan {props.stock} unidades</small></p>
      
      <ItemCount initial={1} stock= {props.stock}/>
   </div>
  )
}