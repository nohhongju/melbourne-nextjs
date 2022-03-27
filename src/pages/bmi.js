import React, { useState } from "react";
import AppLayout from "../components/AppLayout";
export default function Bmi(){
    const [inputs,setInputs] = useState({})
    const [result,setResult] = useState('')
    const {name, weight, height} = inputs;
    
    const onChange = (e) => {
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({ ...inputs, [name]: value})
            
    }
    const onClick = (e) => {
        e.preventDefault()
        setResult ((weight)/((height)*(height))*10000)
    }
   
    return <>
        <form>
        <h1>Bmi</h1>
        <div>
            <label htmlFor=""><b>Name </b></label>
            <input type="text" name="name" onChange={onChange} /><br />
            <label htmlFor=""><b>Height </b></label>
            <input type="text" name="height" onChange={onChange} /><br />
            <label htmlFor=""><b>Weight </b></label>
            <input type="text" name="weight" onChange={onChange} /><br />
            <button onClick={onClick} >BMI 체크</button>
        </div>
        </form>
        <div>결과 : {result}</div>
    </>
}