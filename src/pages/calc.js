import React, { useState } from "react";

export default function Calc(){
    const [inputs, setInputs] = useState({})
    const {num1, num2, opcode} = inputs;
    const [result, setResult] = useState('')

    const onChange = (e) =>{
        e.preventDefault()
        const{value, name} = e.target;
        setInputs({...inputs, [name]: value})
    }
    const onClick = (e) => {
        e.preventDefault()
        switch(opcode){
            case "+": 
            return setResult(Number(num1) + Number(num2)) 
            case "-": 
            return setResult(Number(num1) - Number(num2))  
            case "*":
            return setResult(Number(num1) * Number(num2)) 
            case "/":
            return setResult(Number(num1) / Number(num2))  
            case "%":
            return setResult(Number(num1) % Number(num2))  
            default:
        } 
    }

    return <>
        <form>
        <h1>Calc</h1>
            <label htmlFor=""><b>Num1 </b></label>
            <input type="text" name="num1" onChange={onChange}/><br />
            <label htmlFor=""><b>Opcode </b></label>
            <select name="opcode" id=""onChange={onChange}>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
            <option value="%">%</option>
            </select>
            <br />
            <label htmlFor=""><b>Num2 </b></label>
            <input type="text" name="num2" onChange={onChange}/><br />
            <button onClick={onClick}>계산하기</button>
        </form>
            <div>결과 : {num1} {opcode} {num2} = {result}</div>
    </>
} 