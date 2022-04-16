import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { userActions } from '../../redux/reducers/userReducer.ts';

export default function  Join(){
    const [user, setUser] =useState({
        userid:'', password:'', email:'', name:'', phone:'', birth:'', address:''
    })
    const dispatch = useDispatch()
    const handleChange = e =>{
        e.preventDefault()
        const{name, value} = e.target;
        setUser({...user,[name]: value})
    }
    return <><h1>회원가입폼</h1>
    <form onSubmit={
        e => {
            e.preventDefault()
            alert(' 진행 1: 회원가입 클릭 ');
            dispatch(userActions.joinRequest(user))
            setUser({
                userid:'', password:'', email:'', name:'', phone:'', birth:'', address:''
            })
        }
    }
    >
    <div>
    <label><b>사용자ID</b></label>
    <input type="text" name='userid' onChange={handleChange} /><br />

    <label htmlFor=""><b>비밀번호</b></label>
    <input type="text" name='password' onChange={handleChange}/><br />

    <label htmlFor=""><b>이메일</b></label>
    <input type="text" name='email' onChange={handleChange}/><br />

    <label htmlFor=""><b>이름</b></label>
    <input type="text" name='name' onChange={handleChange}/><br />

    <label htmlFor=""><b>전화번호</b></label>
    <input type="text" name='phone' onChange={handleChange}/><br />

    <label htmlFor=""><b>생년월일</b></label>
    <input type="text" name='birth' onChange={handleChange}/><br />

    <label htmlFor=""><b>주소</b></label>
    <input type="text" name='address' onChange={handleChange}/><br />

    <button type="submit">회원가입</button><br />
    
    </div>
    <div>
   
    </div>
    </form>
    </>
}