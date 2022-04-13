import React from 'react';
// import 'features/common/style/Button.scss'
const Logout = () => {
    return <a className="arrow-btn" style={{cursor:"pointer"}}
        onClick = { e => {
            e.preventDefault()
            e.stopPropagation()
            localStorage.clear(e)
            window.location.href="/"
        }}> 로그아웃
    </a>}
export default Logout