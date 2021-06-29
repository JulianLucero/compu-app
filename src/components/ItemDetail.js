import React, { useEffect, useState } from 'react';
import useCartContext from '../context/CartContext';
import ItemCount from './ItemCount';


export default function ItemDetail(props) {

  const [cantidad, setCantidad] = useState(0)
  const addItem = useCartContext().addItem;
  const onAdd = (value) => {
    setCantidad(value);
    addItem(props.name, value)
  }
  useEffect(() => {

  });
  console.log(props)
  return (
    <div id={props.id}>

      <h3>{props.name}</h3>
      <h4>${props.precio}</h4>
      <img src={props.thumbnailUrl} />
      <p className="description">{props.description}</p>
      <p><small>Nos quedan {props.stock} unidades</small></p>
      {cantidad === 0 ? (
        <ItemCount onAdd={onAdd} initial={1} stock={props.stock} />
      ) : (
        <button>Terminar compra </button>
      )}


    </div>
  );
}