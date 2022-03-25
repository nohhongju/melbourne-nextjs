import React, { useState } from "react";
import AppLayout from "../components/AppLayout";

export default function Calc(){
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [opcode, setOpcode] = useState("")
    const [result,setResult] = useState(0)
    const sum = () => {
        const n1 = document.getElementById('num1')
        const n2 = document.getElementById('num2')
        let num1 = n1.value
        
        console.log('숫자1 : '+num1)
        let num2 = n2.value
        console.log('숫자2 : '+num2)
        setNum1(num1)
        const op = document.getElementById('opcode').value
        setOpcode(op)
        console.log('op : '+opcode)
        setNum2(num2)
        let res = ''
        switch(opcode){
            case "+": 
            res = Number(num1) + Number(num2)
            break
            case "-": 
            res = Number(num1) - Number(num2)  
            break
            case "*":
            res = Number(num1) * Number(num2)
            break
            case "/":
            res = Number(num1) / Number(num2)
            break
            case "%":
            res = Number(num1) % Number(num2)
            break
            default:
        } 
        //document.getElementById('num1').value = ''
        //document.getElementById('num2').value = ''
        //console.log('result : '+res)
        setResult(res) 
        

    }
    return <><h1>Calc</h1>

            <label htmlFor=""><b>Num1 </b></label>
            <input id="num1"type=""/><br />
            <label htmlFor=""><b>Opcode </b></label>
            <select name="" id="opcode">
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
            <option value="%">%</option>
            </select>
            <br />
            <label htmlFor=""><b>Num2 </b></label>
            <input id="num2"type="" /><br />
            <button onClick={sum}>계산하기</button>

            <div>결과 : {num1} {opcode} {num2} = {result}</div>
    </>
}