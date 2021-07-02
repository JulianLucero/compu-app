import React, {useState, useEffect} from 'react';
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
  //Array cond datos que pueden venir de una base de datos, Api, etc.
  const Database = [
    {
        precio: 35000,
        stock: 23,
        id: 1,
        name: "ROG - Republic of Gamers ",
        description: "Asus",
        thumbnailUrl: "https://www.asus.com/media/Odin/websites/global/productosuctLine/20200813114257/P_setting_xxx_0_90_end_185.png"
      },
      {
        precio: 95300,
        stock: 27,
        id: 2,
        name: "TUF GAMING B550M (WI-FI) ZAKU II EDITION",
        description: "Gaming",
        thumbnailUrl: "https://dlcdnwebimgs.asus.com/gain/17023a72-9fd6-42d9-bc81-40f2cb3f304b/w800"
      },
      {
        precio: 150000,
        stock: 35,
        id: 3,
        name: "Z590 WIFI GUNDAM EDITION",
        description: "Gaming",
        thumbnailUrl: "https://dlcdnwebimgs.asus.com/gain/f1cd5a2d-ec56-4949-8f1c-2274692c621e/w800"
      },
      {
        precio: 5000,
        stock: 123,
        id: 4,
        name: "Mouse pad Asus TUF Gaming P3",
        description: "Gaming",
        thumbnailUrl: "https://dlcdnwebimgs.asus.com/gain/14da7e79-c9d4-4973-97d2-fec63e82092c/w800"
      },
      {
        precio: 180000,
        stock: 17,
        id: 5,
        name: "ROG STRIX LC",
        description: "Gaming",
        thumbnailUrl: "https://www.asus.com/microsite/Graphics-Cards/radeon-rx-6000-series/latin/img/banner/banner-lc-2.png"
      },
      {
        precio: 30000,
        stock: 12,
        id: 6,
        name: "ROG-STRIX-1000G",
        description: "Gaming",
        thumbnailUrl: "https://dlcdnwebimgs.asus.com/gain/96F8E49A-C435-42CF-AFA5-AF00D417679E/w1000/h732"
      }
  ];

  let {id} = useParams();

  //inicializamos el estado con un array vacío
  const [productos, setProductos] = useState(null)

  useEffect(() => {
  
  let miPromesa = new Promise((resolve, reject) => {  
  setTimeout(function(){
    //"mock" de errores, lo dejamos afuera por ahora
    //const error = Math.random() > 0.85;
    const error = false;
    if(!error){      
      resolve(Database[id-1]);  
      console.log("Promesa",Database[id-1]);
    }
    //si llegamos a esta intancia, significa que tuvimos un error,por eso "rechazamos" (reject) la promesa.
    reject("Error obteniendo los datos :(");
    }, 
    50)});
    

  //una vez resuelta la promesa... 
  miPromesa.then( function(valor){
    //actualizamos el state
    setProductos(valor);
  }).catch(
    function(error){
      console.log(error);
  })
  
}, []);
    
  


  return (
   <div>
     {console.log("estado",productos)}
     {productos !== null? (
            <ItemDetail
            name={productos.name}
            description={productos.description}
            precio={productos.precio}
            thumbnailUrl={productos.thumbnailUrl}
            stock={productos.stock}
            id= {productos.id}
            >
            </ItemDetail>
     )      :(<h2>Cargando</h2>)}
     
       
    </div>
  )
}
export default ItemDetailContainer;