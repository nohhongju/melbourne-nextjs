import React, { useState } from "react";
import AppLayout from "../components/AppLayout";

export default function Counter (){
    const[count, setCount] = useState(0);
    return (
    <>
    <button onClick={()=>{setCount (count + 1)}}>+</button><br />
    <button onClick={()=>{setCount (count - 1)}}>-</button><br />
    <div>{count}</div>
    </>
    )
}