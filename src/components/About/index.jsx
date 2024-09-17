import style from "./about.module.css"
import Batata from "../../img/Screenshot_20240325_112858_Photos.jpg"
import git from "../../img/github-logo.png"
import insta from "../../img/linkedin-app-white-icon.png"


export default function About() {
    
    return(
        <>

        <div className={style.mainContainer}>
            <div className={style.part1}>
                <img className={style.profileImg} src={Batata} alt="" id="main-picture"/>
                <ul className={style.ulLogo}>
                    <li><a href="https://github.com/kau-menezes" target="blank"><img className={style.logo} src={git} alt=""/></a></li>
                    <li><a href="https://www.linkedin.com/in/kauane-menezes/"><img className={style.logo} src={insta} alt=""/></a></li>
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