import axios from "axios";
import { useEffect, useState } from "react"
import tableStyle from "../common/style/table.module.css";
import Link from "next/link";

const Table = ({ columns, colspan, data }) => {
    return(
     <table className={tableStyle.table}>
        <thead>
        {/** <th key={column} className={tableStyle.td}>{column}</th> */}
         <tr className={tableStyle.tr}>
         {columns.map((column) => (
             <th key={column.username} className={tableStyle.td}>{column}</th>))}
            </tr>
        </thead>
        <tbody>
            { data.length == 0 ?<tr className={tableStyle.tr}>
                                <td colSpan={colspan} className={tableStyle.td}>데이터가 없습니다.</td>
                                </tr>
            :data.map((user) => (
                <tr className={tableStyle.tr} key={user.userid}>
                  <td className={tableStyle.td}>
                    <Link href={{pathname: `/user/[userid]`,
                                query:{selectedUser: 'test'}}} as={`/user/${user.userid}`}>
                      <a>{user.userid}</a>          
                    </Link>
                  </td>
                    <td className={tableStyle.td}>{user.password}</td>
                    <td className={tableStyle.td}>{user.email}</td>
                    <td className={tableStyle.td}>{user.name}</td>
                    <td className={tableStyle.td}>{user.phone}</td>
                    <td className={tableStyle.td}>{user.birth}</td>
                    <td className={tableStyle.td}>{user.address}</td>
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
        <div className={tableStyle.td}>
        <Table columns={columns} colspan={4} data={data}/>
        </div>
        </>
    )
}