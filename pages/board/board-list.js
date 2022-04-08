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
         {columns.map((column) => (<th key={column.passengerId} className={tableStyle.td}>{column}</th>))}
            </tr>
        </thead>
        <tbody>
            { data.length == 0 ?<tr className={tableStyle.tr}>
                                <td colSpan={colspan} className={tableStyle.td}>데이터가 없습니다.</td>
                                </tr>
            :data.map((board) => (
                <tr className={tableStyle.tr} key={board.passengerId}>
                    <td className={tableStyle.td}>{board.passengerId}</td>
                    <td className={tableStyle.td}>{board.name}</td>
                    <td className={tableStyle.td}>{board.teamId}</td>
                    <td className={tableStyle.td}>{board.subject}</td>
                </tr>
            ))}

        </tbody>
     </table>
    );
}
export default function BoardList(){
    const columns = ["PassengerId", "Name", "TeamId", "Subject"];
    const [data, setData] = useState([])
    const count = data.length
    useEffect(() => {
        axios.get('http://localhost:5000/api/board/list').then(res=>{
            setData(res.data.boards)
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