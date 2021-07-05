import React, {useState} from 'react';
import { Link, useHistory } from "react-router-dom";
import ItemCount from './ItemCount';


export default function ItemDetail(props) {
  const [cantidadComprada, setCantidadComprada] = useState(0);

  const navig = useHistory();

  function onAdd (value){
    console.log('Valor llamado: ' , value);
    setCantidadComprada(value);
    alert(`Agregaste ${value} items al carrito.`);
  }

  console.log(props)
  return (
   <div id={props.id}>
      
      <h3>{props.name}</h3>
      <h4>${props.precio}</h4>
      <img src={props.thumbnailUrl}/> 
      <p className="description">{props.description}</p>
      <p><small>Nos quedan {props.stock} unidades</small></p>
      {cantidadComprada === 0?
      <ItemCount 
        onAdd ={onAdd} 
        initial={1} 
        stock= {props.stock}
        />
        :
        <button 
                className="flex mx-auto mt-2 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
                Finalizar compra
            </button>
            }
        <button
          onClick={() => navig.go(-1)}
          className="flex-shrink-0 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg mt-10 sm:mt-0"
        >
          Volver
        </button>    
   </div>
   
  )
}