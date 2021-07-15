import React, {useState} from 'react';
import Item from './Item';
import { CardDeck, Spinner } from 'react-bootstrap';
import {useParams} from 'react-router-dom';



  const Database = [
    {
        precio: 35000,
        category: "Monitores",
        stock: 23,
        id: "KcULXlBY2OB8XUbGIgqL",
        name: "ROG - Republic of Gamers ",
        description: "Asus",
        thumbnailUrl: "https://www.asus.com/media/Odin/websites/global/ProductLine/20200813114257/P_setting_xxx_0_90_end_185.png"
      },
      {
        precio: 95300,
        category: "Placa base",
        stock: 27,
        id: "mOS1aAAOpNXH5WvRC8M3",
        name: "TUF GAMING B550M (WI-FI) ZAKU II EDITION",
        description: "Gaming",
        thumbnailUrl: "https://dlcdnwebimgs.asus.com/gain/17023a72-9fd6-42d9-bc81-40f2cb3f304b/w800"
      },
      {
        precio: 150000,
        category: "Placa base",
        stock: 35,
        id: "rq8zEYl4xga6lvz9oet6",
        name: "Z590 WIFI GUNDAM EDITION",
        description: "Gaming",
        thumbnailUrl: "https://dlcdnwebimgs.asus.com/gain/f1cd5a2d-ec56-4949-8f1c-2274692c621e/w800"
      },
      {
        precio: 5000,
        category: "Mouse Pad",
        stock: 123,
        id: "p1en7DEocetc6wRESmTf",
        name: "Mouse pad Asus TUF Gaming P3",
        description: "Gaming",
        thumbnailUrl: "https://dlcdnwebimgs.asus.com/gain/14da7e79-c9d4-4973-97d2-fec63e82092c/w800"
      },
      {
        precio: 180000,
        category: "Placa de video",
        stock: 17,
        id: "iOiWdqKFf2vsvFKYVo8q",
        name: "ROG STRIX LC",
        description: "Gaming",
        thumbnailUrl: "https://www.asus.com/microsite/Graphics-Cards/radeon-rx-6000-series/latin/img/banner/banner-lc-2.png"
      },
      {
        precio: 30000,
        category: "Fuente",
        stock: 12,
        id: "9KNV0LmKdwoizxIC2Tzk",
        name: "ROG-STRIX-1000G",
        description: "Gaming",
        thumbnailUrl: "https://dlcdnwebimgs.asus.com/gain/96F8E49A-C435-42CF-AFA5-AF00D417679E/w1000/h732"
      }
  ];

// Creamos una promesa que nos devuelva los datos de la "base de datos"
// Simulamos la demora de solicitar datos a la red, demorando 500ms la promesa usando setTimeout()
function crearPromesa(categ) {
   
  return new Promise((resolve, reject) => {  
  setTimeout(function(){        
    const error = false;
    if(!error){                      
      !categ ? 
        resolve(Database)
        : resolve(Database.filter( (item) =>{
            return(item.category === categ)
          }
        ))  
    }
    reject("Error obteniendo los datos :(");
    }, 500);
  });     
}


// nuestro componente
function ItemList(){
  const {category} = useParams();

  //Inicializamos el estado con un array vacío
  const [productos,setProductos] = useState([]);

  // creamos la Promesa
  let requestDatos = crearPromesa(category);

  // una vez que la promesa se cumple se ejecuta .then(), y guardamos los datos recibidos en el estado
  requestDatos.then( function(items_promise){
      setProductos(items_promise);        
    })
    // si hay errores, los "atrapamos" en nuestro .catch()
    .catch(
      function(error){
                 
    })
    

  return (
   <CardDeck className="d-flex justify-content-around">
       {/* Vamos a "loopear" los productos, mediante el metodo MAP
        Al iniciar el componente, "productos" está vacío! por suerte React detecta cuando cambia el estado de un componente, y lo renderiza nuevamente aplicando los cambios que correspondan */}
        <div class="container">
        {productos.length === 0 && <h3>CARGANDO . . .</h3>}  
        {productos.map( (prod,index)=> (
            //en cada iteración del array, renedrizamos un componente, pasandole además las props que necesitemos
            <CardDeck >
            <Item
            key={index}
            name={prod.name}
            description={prod.description}
            precio={prod.precio}
            thumbnailUrl={prod.thumbnailUrl}
            stock={prod.stock}
            id = {prod.id}
            >
            </Item>
            <hr/>
            </CardDeck>
            
        ))}
        </div>
        <div>
        
        </div>
       
    </CardDeck>
  )
}

export default ItemList;