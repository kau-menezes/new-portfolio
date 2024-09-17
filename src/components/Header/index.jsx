import style from "./header.module.css"

export default function Header() {
    return (
    <>
    <header className={style.header}>
        <h3 >Kauane Menezes</h3>
        <span className={style.menu}>oi</span>
        <nav className={style.nav}>
            <ul className={style.ul}>
                <li className={style.li} ><a className={style.a} href="#about">About Me</a></li>
                <li className={style.li} ><a className={style.a} href="#education">Education</a></li>
                <li className={style.li} ><a className={style.a} href="#skills">Skills</a></li>
                <li className={style.li} ><a className={style.a} href="#experience">Experience</a></li>
                <li className={style.li} ><a className={style.a} href="#projects">Projects</a></li>
                <li className={style.li} ><a className={style.a} href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    </>
    )
}