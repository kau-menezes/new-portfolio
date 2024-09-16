import style from "./header.module.css"

export default function Header() {
    return (
    <>
    <header className={style.header}>
        <h3 >Kauane Menezes</h3>
        <nav>
            <ul className={style.ul}>
                <li className={style.li} ><a className={style.a} href="">About Me</a></li>
                <li className={style.li} ><a className={style.a} href="">Education</a></li>
                <li className={style.li} ><a className={style.a} href="">Skills</a></li>
                <li className={style.li} ><a className={style.a} href="">Experience</a></li>
                <li className={style.li} ><a className={style.a} href="">Projects</a></li>
                <li className={style.li} ><a className={style.a} href="">Contact</a></li>
            </ul>
        </nav>
    </header>
    </>
    )
}