import axios from "axios";
import { useEffect, useState } from "react"
import tableStyle from "../common/style/table.module.css";
import Link from "next/link";

const Table = ({ columns, colspan, data }) => {
    return(
     <table className={tableStyle.table}>
        <thead>
        {/** <th key={column} className={tableStyle.td}>{column}</th> */}
         <tr >
         {columns.map((column) => (
             <th key={column.userid} >{column}</th>))}
            </tr>
        </thead>
        <tbody>
            { data.length == 0 ?<tr >
                                <td colSpan={colspan} >데이터가 없습니다.</td>
                                </tr>
            :data.map((user) => (
                <tr key={user.userid}>
                  <td>
                    <Link href={{pathname: `/user/[id]`,
                                query:{selectedUser: 'test'}}} as={`/user/${user.userid}`}>
                      <a>{user.userid}</a>          
                    </Link>
                  </td>
                    <td>{user.password}</td>
                    <td>{user.email}</td>
                    <td>{user.name}</td>
                    <td>{user.phone}</td>
                    <td>{user.birth}</td>
                    <td>{user.address}</td>
                </tr>
            ))}

        </tbody>
     </table>
    );
}
export default function UserList(){
    const columns = ["userid", "Password", "email", "name", "phone", "birth", "address"];
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/api/user/list').then(res=>{
            setData(res.data.users)
        }).catch(err=>{})
    }, [])
    return(<>
        <h1>사용자목록</h1>
        <div>
        <Table columns={columns} colspan={4} data={data}/>
        </div>
        </>
    )
}