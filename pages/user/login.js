import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { userActions } from '../../redux/reducers/userReducer.ts';
import tableStyles from '../common/style/table.module.css'
export default function  Login(){
    const [login, setLogin] =useState({
        userid:'', password:''
    })
    const dispatch = useDispatch()
    const handleChange = e=>{
        e.preventDefault()
        const{name, value} = e.target;
        setLogin({...login,[name]: value})
    }
    return <form onSubmit={
        e => {
            e.preventDefault()
            alert(' 진행 1: 로그인 클릭 ');
            dispatch(userActions.loginRequest(login))
            setLogin({
                userid:'', password:''
            })
            window.location.href = "/"
        }
    }
    >
        <table className={tableStyles.table}>
            <thead>
                <tr>
                    <th colSpan={2}><h1>로그인</h1></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><b>사용자ID</b></td>
                    <td><input type="text" name='userid' onChange={handleChange} /></td>
                </tr>
                <tr>
                    <td><b>비밀번호</b></td>
                    <td><input type="text" name='password' onChange={handleChange}/></td>
                </tr>
                <tr>
                    <td colSpan={2}><button type="submit">로그인</button><br /></td>
                </tr>
            </tbody>
        </table>
    </form>
}