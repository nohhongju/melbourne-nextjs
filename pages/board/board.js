import style from "./style/board-form.module.css";
import React,{ useState } from 'react' 
import axios from "axios";
import { addTask } from "../../redux/reducers/boardReducer";
import { useDispatch } from "react-redux";

export default function Board(){
    const [value, setValue] = useState({})
    const dispatch = useDispatch()

    return (<>
        <h1>게시글 등록</h1>
        <div className={style.container}>
            <form onSubmit={ e => {
                e.preventDefault()
                alert('value ?'+value)
                if(value) dispatch(addTask({task: value}))
            }}>
            <div className={style.row}>
                <div className={style.col25}>
                <label className={style.label} htmlFor="passengerId">글 제목</label>
                </div>
                <div className={style.col75}>
                <input type="text" className={style.inputText} id="passengerId" 
                name="title" placeholder="글 제목 입력" onChange={e => setValue(e.target.value)}/>
                </div>
            </div>
            {/** 
            <div className={style.row}>
                <div className={style.col25}>
                <label htmlFor="name">게시글 작성자 이름</label>
                </div>
                <div className={style.col75}>
                <input type="text" id="name" name="name" 
                placeholder="게시글 작성자 이름 입력" onChange={e => setValue(e.target.value)}/>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                <label htmlFor="team">응원팀</label>
                </div>
                <div className={style.col75}>
                <select id="teamId" name="teamId" onChange={e => setValue(e.target.value)}>
                    <option value="">응원팀 선택</option>
                    <option value="K09">Fc seoul</option>
                    <option value="K02">Suwon Samseong blue wings</option>
                    <option value="K04">Incheon United</option>
                </select>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                <label htmlFor="subject">게시글 내용</label>
                </div>
                <div className={style.col75}>
                <textarea id="subject" name="subject" placeholder="게시글 입력" 
                style={{height:200 + "px"}} onChange={e => setValue(e.target.value)}></textarea>
                </div>
            </div>
            <br/>
            */}
            <div className={style.row}>
                <input type="submit" value="Submit"/>
            </div>
            </form>
            </div>
    </>);
}