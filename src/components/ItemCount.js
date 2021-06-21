import { SportsHockeyTwoTone } from "@material-ui/icons";
import React from "react";
import { Button } from "react-bootstrap";



function ItemCount(props) {
    const [count, setCount] = React.useState(props.initial);
    const max = props.stock;

    function upCount(click){
        console.log(click);
        count < max
        ?setCount( count +1)
        :console.log('Has alcanzado el max');
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
