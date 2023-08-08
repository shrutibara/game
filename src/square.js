import { useState } from "react";

function Squares(props){

 return (
    <button className="square" onClick={props.handleClick}>{props.squareValue}</button>
 )
}

export default Squares;