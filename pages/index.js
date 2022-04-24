import axios from "axios";
import React, { useCallback, useEffect } from 'react';
import Image from "next/image";
import Typewriter from 'typewriter-effect'

export default function Home() {
  useEffect(() => {
  const loginUser = localStorage.getItem("loginUser")
  if(loginUser===null){
    axios.get("http://localhost:5000/api/now").then((res) => {
      var data = res.data;
      document.getElementById("timeZone").innerHTML = '<h1>현재시간: '+data.now+'<h1>'
  });
}else{
  const currentUser = JSON.parse(loginUser)
  document.getElementById("timeZone").innerHTML = '<h1>환영합니다:'+currentUser.user.name+'<h1>'
}
});
  return (<>
    <h1><Typewriter
    options={{
      strings: ['ㅎ...'],
      autoStart: true,
      loop: true,
    }}
  /></h1>
    <div id="timeZone"></div>
    <body>
    <Image src="/user/보노보노.gif" width="1000" height="600" alt="보노보노홍주"/>
    </body>
    </>
  )
}