import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Profile(){
    const router = useRouter()
    const [user, setUser] = useState({})
    useEffect(()=>{
      axios.get(`http://localhost:5000/api/user/profile/${router.query.id}`)
      .then(res=>{
        setUser(res.data.user)
      }).catch(err=>{
         
      })
    },[])

    /**useEffect(() => {
        (async () => {
            console.log(`Next ----> /user/profile/${router.query.id}`);
            await router.prefetch( `/user/profile/${router.query.id}`, {})
            .then(res=>{
                setUser(res.data.user)
              }).catch(err=>{
                  
              })
        })();
    }, [router.query.id]);*/

    return (<><h1>사용자 프로필</h1>
    <div>
    <label><b>사용자 ID</b></label>
    <input type="text" name='username' value= {router.query.id} /><br />

    <label htmlFor=""><b>비밀번호</b></label>
    <input type="text" name='password'value={user.password}/><br />

    <label><b>이름</b></label>
    <input type="text" name='name' value={user.name}/><br />

    <label><b>전화번호</b></label>
    <input type="text" name='telephone' value={user.telephone}/><br />

   <br />
    </div>
    <div>
    </div>
    </>)
}