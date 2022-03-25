import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState }from "react";

export default function Home() {
  const[count, setConut] = useState(0);
  return(<>
    <button onClick={()=>{ setConut (count + 1)}}>+</button><br/>
    <button onClick={()=>{ setConut (count - 1)}}>-</button><br/>
    <div>{count}</div>
    </>
  )
}
