import axios from "axios";
import React, { useEffect, useState } from "react";
import tableStyle from "../common/style/table.module.css";

const Table = ({ columns, colspan, data }) => {
    return(
     <table className={tableStyle.table}>
        <thead>
        {/** <th key={column} className={tableStyle.td}>{column}</th> */}
            <tr>
                {columns.map((column) => (
                    <th key={column.title}>{column}</th>))}
            </tr>
        </thead>
        <tbody>
            { data.length == 0 ?
                <tr>
                    <td colSpan={colspan}>데이터가 없습니다.</td>
                </tr>
            :data.map((board) => (
                <tr key={board.title}>
                    <td>{board.title}</td>
                    <td>{board.name}</td>
                    <td>{board.team}</td>
                    <td>{board.subject}</td>
                </tr>
            ))}
        </tbody>
     </table>
    );
}
export default function BoardList(){
    const columns = ["Title", "Name", "Team", "Subject"];
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/board/list').then(res=>{
            setData(res.data.boards)
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