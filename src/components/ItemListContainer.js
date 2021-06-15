import React from 'react'
import ItemList from './ItemList';

function ItemListContainer(props) {
    return (
        <div>
            <h3>Para comenzar presiona el boton{props.title}</h3>
            <ItemList/>
            
        </div>
    );
}

export default ItemListContainer;