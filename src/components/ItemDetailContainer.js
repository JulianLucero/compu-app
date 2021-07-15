import React, {useState, useEffect} from 'react';
import ItemDetail from "./ItemDetail";
import {getFirestore} from './../firebase';
import { useParams } from 'react-router-dom';


 

function ItemDetailContainer(){  
    const [productos,setProductos] = useState(null);  
    const {id} = useParams();
    
    const cliente ={
      name: "Julian",
      adress: "Compuadress 6235",
      mail:"julian.eduardo.lucero@gmail.com",
    }

    const [isLoading, setLoading] = useState(false);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
      setLoading(true);
      const db = getFirestore();
      const productRef = db.collection("products2").doc(id)

      productRef.get().then((doc) => {
        if (doc.exists) {
          setProductos({id,...doc.data()});
        } else {              
            setNotFound(true);
        }
        }).catch((error) => {
            setLoading(false);
           
        }).finally(() => 
            setLoading(false)
        );
      },[]);

  return (
      <section className="text-gray-600 body-font">
          <div className="container px-5 py-6 mx-auto">        
              <div className="flex flex-wrap sm:-m-4 -mx-8 -mb-10">
              {isLoading &&  <span>CARGANDO . . .</span> } 
              {notFound && <span>El item que buscás no está disponible.</span> } 
              {productos &&                
                  <div>
                  <ItemDetail
                      name={productos.name}
                      description={productos.description}
                      precio={productos.precio}
                      thumbnailUrl={productos.thumbnailUrl}
                      stock={productos.stock}
                      id= {productos.id}
                  /> 
                      
                  </div>
              }               
              </div>
          </div>
    </section>
  )  
}

export default ItemDetailContainer;

  