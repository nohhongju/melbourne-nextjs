import Column from "antd/lib/table/Column";
import React from "react";
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
            <tr className={tableStyle.tr}>
                { data.length == 0 ?<td colSpan={colspan} className={tableStyle.td}>데이터가 없습니다.</td>
                :<td colSpan={colspan} className={tableStyle.td}>데이터가 있습니다.</td>}
            </tr>
        </tbody>
     </table>
    );
}
export default function UserList(){
    const columns = ["Username", "Password", "Name", "Telephone"];
    const data = []
    const count = data.length
    return(<>
        <h1>사용자목록</h1>
        {count != 0 && <h3>회원수 : {count} 명</h3>}
        <div className={tableStyle.td}>
        <Table columns={columns} colspan={4} data={data}/>
        </div>
        </>
    )
}