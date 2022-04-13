import react from 'react';
import tableStyles from "../common/style/table.module.css"
import { useEffect, useState } from "react";
import Head from "next/head";

const Table = ({colspan, data}) => {
    return(
        <table className={tableStyles.table}>
            <thead>
                <tr className={tableStyles.tr}>
                    <th className={tableStyles.th}>할 일 목록</th>
                </tr>
            </thead>
            <tbody>
                {data.length == 0 ? <tr className={tableStyles.tr}>
                <td colSpan={colspan} className={tableStyles.td}>일정이 없습니다</td>
                </tr>
                :data.map((todo) => (
                    <tr className={tableStyles.tr} key={todo.context}>
                        <td className={tableStyles.td} key={todo.context}></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )}
export default function TodoList(){
    const [data, setData] = useState([])
    const count = data.length
    return(<>
        <Head>
            <title>Todo| 할일목록</title>
        </Head>
        <h1>할 일 목록</h1>
        <Table data = {data}></Table>
    
        </>)
    }