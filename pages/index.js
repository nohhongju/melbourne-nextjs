import axios from "axios";
import React, { useCallback } from 'react';

const Button = ({ onClick }) => (
  <button onClick={onClick}>현재 시간</button>
);

export default function Home() {
  const onClick = useCallback(() => {
    axios.get("http://localhost:5000/api/now").then((res) => {
      alert(JSON.stringify(res.data))
      var data = res.data;
      document.getElementById("timeZone").innerHTML = '<h1>현재시간: '+data.now+'<h1>'
    });
  });
  return (<>
    <h1>HOME</h1>
    <Button onClick={onClick} />
    <div id="timeZone"></div>
    </>
  )
}