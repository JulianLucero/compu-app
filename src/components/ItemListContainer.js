import React from 'react'
import ItemList from './ItemList';
import {useParams} from 'react-router-dom';

const ItemListContainer = (props) => {
    const {category} = useParams();
    const title=props.title || category;

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-12 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl uppercase text-2xl font-large title-font mb-8 text-red-600">{title}</h1>
                    <hr />
                </div>    
            </div>
            <ItemList />
         </section>
    );
}


export default ItemListContainer;