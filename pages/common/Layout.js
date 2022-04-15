import Nav from "./Nav";
import Footer from "./Footer";
import style from "./style/Layout.module.css";

export default function Layout({ children }){
    return(
        <>
        <Nav/>
        <div className={style.container}>
        <main className={style.main}>{children}</main>
        </div>
        <Footer/>
        </>
    );
}

