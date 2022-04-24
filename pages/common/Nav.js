import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Link from "next/link";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import tableStyles from "../common/style/Nav.module.css"
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image';


export default function Nav(){
  const [userUrls, setUserUrls] = useState([])
  const [userSubTitle, setUserSubTitle] = useState([])
  const basicUrls = ["/basic/counter","/basic/calc","/basic/bmi"]
  const basicSubTitle = ["카운터","계산기","BMI"]
  // const userUrls = ["/user/join","/user/login","/user/logout","/user/profile","/user/updateUser","/user/withdrawUser","/user/getUsers"]
  // const userSubTitle = ["회원가입","로그인","로그아웃","프로필","회원수정","회원탈퇴","회원목록"]
  const todoUrls = ["/todo/addTodo","/todo/getTodo","/todo/modifyTodo","/todo/removeTodo"]
  const todoSubTitle = ["할일등록","할일목록","할일수정","할일삭제"]
  const gameUrls = ["/game/addGame","/game/getGame","/game/modifyGame","/game/removeGame"]
  const gameSubTitle = ["게임등록","게임목록","게임수정","게임삭제"]
  const teamUrls = ["/team/addTeam","/team/getTeam","/team/modifyTeam","/team/removeTeam"]
  const teamSubTitle = ["팀등록","팀목록","팀수정","팀삭제"]
  const boardUrls = ["/board/addArticle","/board/getArticles","/board/modifyArticle","/board/removeArticle"]
  const boardSubTitle = ["글등록","글목록","글수정","글삭제"]
  
  useEffect(() => {
    const loginUser = localStorage.getItem("loginUser")
    if(loginUser===null){
      setUserUrls(["/user/join","/user/login"])
      setUserSubTitle(["회원가입","로그인"])
    }
    else{
      setUserUrls(["/user/logout","/user/profile","/user/updateUser","/user/withdrawUser","/user/getUsers"])
      setUserSubTitle(["로그아웃","프로필","회원수정","회원탈퇴","회원목록"])
    }
  });

  return (
    <table className={tableStyles.table}>
      <tr>
      <td>
        <a href={"/"}><Image src="/user/후후.gif" width="70" height="50" alt="후후후"/></a>
        <SubMenu title={"기본"} urls={basicUrls} subTitles={basicSubTitle}/>
        <SubMenu id="user" title={"사용자"} urls={userUrls} subTitles={userSubTitle}/>
        <SubMenu title={"투두"} urls={todoUrls} subTitles={todoSubTitle}/>
        <SubMenu title={"게임"} urls={gameUrls} subTitles={gameSubTitle}/>
        <SubMenu title={"팀"} urls={teamUrls} subTitles={teamSubTitle}/>
        <SubMenu title={"게시판"} urls={boardUrls} subTitles={boardSubTitle}/>
        </td>
      </tr>
    </table>
  );
}
const SubMenu = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return <>
    <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {props.title}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
         {props.urls.map(function(url, i){
            return <MenuItem onClick={handleClose}><Link href={url} key={i}>{props.subTitles[i]}</Link></MenuItem>
          })}
      </Menu>
      </>
}