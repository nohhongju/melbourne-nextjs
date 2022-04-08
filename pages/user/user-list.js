import Column from "antd/lib/table/Column";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react"
import tableStyle from "../common/style/table.module.css";

const Table = ({ columns, colspan, data }) => {
    return(
     <table className={tableStyle.table}>
        <thead>
        {/** <th key={column} className={tableStyle.td}>{column}</th> */}
         <tr className={tableStyle.tr}>
         {columns.map((column) => (<th key={column.username} className={tableStyle.td}>{column}</th>))}
            </tr>
        </thead>
        <tbody>
            { data.length == 0 ?<tr className={tableStyle.tr}>
                                <td colSpan={colspan} className={tableStyle.td}>데이터가 없습니다.</td>
                                </tr>
            :data.map((user) => (
                <tr className={tableStyle.tr} key={user.username}>
                    <td className={tableStyle.td}>{user.username}</td>
                    <td className={tableStyle.td}>{user.password}</td>
                    <td className={tableStyle.td}>{user.name}</td>
                    <td className={tableStyle.td}>{user.telephone}</td>
                </tr>
            ))}

        </tbody>
     </table>
    );
}
export default function UserList(){
    const columns = ["Username", "Password", "Name", "Telephone"];
    const [data, setData] = useState([])
    const count = data.length
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