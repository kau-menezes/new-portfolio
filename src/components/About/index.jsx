import style from "./about.module.css"

export default function About() {
    
    return(
        <>
        <div className={style.mainContainer}>
            <div className={style.part1}>
                <img className={style.profileImg} src="./src/img/Screenshot_20240325_112858_Photos.jpg" alt="" id="main-picture"/>
                <ul className={style.ulLogo}>
                    <li><a href="https://github.com/kau-menezes" target="blank"><img className={style.logo} src="../../../src/img/github-logo.png" alt=""/></a></li>
                    <li><a href=""><img className={style.logo} src="../../../src/img/insta.jpg" alt=""/></a></li>
                </ul>
            </div>
            <div className={style.part2}>
                <h2>Get to know me better!</h2>
                <p className={style.text}>I am a 20-year-old who has discovered a passion for technology and is now completely in love with creating and developing new projects and turning ideas into reality.</p>
                <p className={style.text}>Currently, I work at Robert Bosch Ltda from Curitiba, Brazil, and I am excited about pursuing my career in the programming field.</p>
            </div>
        </div>
        </>

    )
}