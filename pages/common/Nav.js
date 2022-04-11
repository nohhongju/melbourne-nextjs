import Link from "next/link";
import style from "common/style/Nav.module.css";

export default function Nav(){
    return(
        <nav className={style.nav}>
            <ul>
                <li className={style.li}> <Link href='/'>Home</Link></li>
                <li className={style.li}> <Link href='/admin/dashboard'>Dashboard</Link></li>
                <li className={style.li}> <Link href='/basic'>Basic</Link></li>
                <li className={style.li}> <Link href='/basic/bmi'>Bmi</Link></li>
                <li className={style.li}> <Link href='/basic/calc'>Calc</Link></li>
                <li className={style.li}> <Link href='/basic/counter'>Counter</Link></li>
                <li className={style.li}> <Link href='/board/board-list'>BoardList</Link></li>
                <li className={style.li}> <Link href='/board/board-form'>BoardForm</Link></li>
                <li className={style.li}> <Link href='/game/game-list'>GameList</Link></li>
                <li className={style.li}> <Link href='/game/team-list'>TeamList</Link></li>
                <li className={style.li}> <Link href='/game/team-form'>TeamForm</Link></li>
                <li className={style.li}> <Link href='/todo/todo-list'>TodoList</Link></li>
                <li className={style.li}> <Link href='/user/login'>SignIn</Link></li>
                <li className={style.li}> <Link href='/user/join'>SignUp</Link></li>
                <li className={style.li}> <Link href='/user/user-list'>UserList</Link></li>
            </ul>
        </nav>
    );
 
}
