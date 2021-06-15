import { SportsHockeyTwoTone } from "@material-ui/icons";
import React from "react";
import { Button } from "react-bootstrap";



function ItemCount() {
    const [count, setCount] = React.useState(0);

    function upCount(click){
        console.log(click);
        return setCount( count +1);
    }
    function downCount(click){
        console.log(click);
        count > 0
        ? setCount ( count -1)
        : console.log('tiene que ser mayor que cero');
    }
          
    return (
        <div>
        <Button variant="success" onClick={upCount}>
          +
        </Button>
        <div>{count}</div>
        <Button variant="danger" onClick={downCount}>
          -
        </Button>
      </div>
    );
  }


export default ItemCount;
