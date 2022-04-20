import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import tableStyles from '../common/style/table.module.css'

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

    return (
      <table className={tableStyles.table}>
      <thead>
      <tr>
      <th colSpan={2}><h1>사용자 프로필</h1></th>
      </tr>
      </thead>
    <tbody>
    <tr>
    <td><b>사용자 ID</b></td>
    <input type="text" name='username' value= {router.query.id}/>
    </tr>
    <tr>
    <td htmlFor=""><b>비밀번호</b></td>
    <input type="text" name='password'value={user.password}/>
    </tr>
    <tr>
    <td><b>이름</b></td>
    <input type="text" name='name' value={user.name}/>
    </tr>
    <tr>
    <td><b>전화번호</b></td>
    <input type="text" name='telephone' value={user.telephone}/>
    </tr>
    </tbody>
    
    </table>)
}