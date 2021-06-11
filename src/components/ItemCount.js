import React from 'react';
import {useState} from 'react';

{/*function ItemCount() {
    const [count, setCount] = useState(0);
    return (
      <div>
        Count: {count}
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      </div>
    );
  }
{*/}
const ItemCount = () => {
    function upCount(){
        setClicks (clicks+ 1);
    };

    function downCount(){
        setClicks (clicks- 1);
    };

    const [clicks,setClicks] = React.useState(0);
    return(
        <div>
            <button onClick={upCount}>+</button>
            
            <button onClick={downCount}>-</button>
            <p>{`Clickeaste ${clicks}veces`}</p>
        </div>
    )
}

export default ItemCount;