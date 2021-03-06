const firebase = require("firebase");

require("firebase/firestore");

//inicializamos la app con nuestras credenciales
firebase.initializeApp({
    apiKey: "AIzaSyBBASNeqei8cBwRWrStAI3HUL2dyQE7Lzs",
    authDomain: "compu-shopping.firebaseapp.com",
    projectId: "compu-shopping",
    storageBucket: "compu-shopping.appspot.com",
    messagingSenderId: "713932760000",
    appId: "1:713932760000:web:21426f5e80d4d195571e25"
  });
  
var db = firebase.firestore();

const Database = [
    {
        "precio": 35000,
        "category": "Monitores",
        "stock": 23,
        "id": 1,
        "name": "ROG - Republic of Gamers ",
        "description": "Asus",
        "thumbnailUrl": "https://www.asus.com/media/Odin/websites/global/ProductLine/20200813114257/P_setting_xxx_0_90_end_185.png"
      },
      {
        "precio": 95300,
        "category": "Placa base",
        "stock": 27,
        "id": 2,
        "name": "TUF GAMING B550M (WI-FI) ZAKU II EDITION",
        "description": "Gaming",
        "thumbnailUrl": "https://dlcdnwebimgs.asus.com/gain/17023a72-9fd6-42d9-bc81-40f2cb3f304b/w800"
      },
      {
        "precio": 150000,
        "category": "Placa base",
        "stock": 35,
        "id": 3,
        "name": "Z590 WIFI GUNDAM EDITION",
        "description": "Gaming",
        "thumbnailUrl": "https://dlcdnwebimgs.asus.com/gain/f1cd5a2d-ec56-4949-8f1c-2274692c621e/w800"
      },
      {
        "precio": 5000,
        "category": "Mouse Pad",
        "stock": 123,
        "id": 4,
        "name": "Mouse pad Asus TUF Gaming P3",
        "description": "Gaming",
        "thumbnailUrl": "https://dlcdnwebimgs.asus.com/gain/14da7e79-c9d4-4973-97d2-fec63e82092c/w800"
      },
      {
        "precio": 180000,
        "category": "Placa de video",
        "stock": 17,
        "id": 5,
        "name": "ROG STRIX LC",
        "description": "Gaming",
        "thumbnailUrl": "https://www.asus.com/microsite/Graphics-Cards/radeon-rx-6000-series/latin/img/banner/banner-lc-2.png"
      },
      {
        "precio": 30000,
        "category": "Fuente",
        "stock": 12,
        "id": 6,
        "name": "ROG-STRIX-1000G",
        "description": "Gaming",
        "thumbnailUrl": "https://dlcdnwebimgs.asus.com/gain/96F8E49A-C435-42CF-AFA5-AF00D417679E/w1000/h732"
      }
  ]


  Database.forEach(function(item) {
    db.collection("products2").add({
        //Asegurense de que los campos que agregan a la base de datos, sean los que tienen en su propio array
        name: item.name,
        description: item.description,
        precio: item.precio,
        category: item.category,
        stock: item.stock,
        id:item.id,
        thumbnailUrl: item.thumbnailUrl

    }).then(function(docRef) {
        
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});