import style from "./projects.module.css"

export default function Projects() {
    return (
        <div  id="projects"  className={style.projects}>
        <h2 className={style.title}>Projects</h2>
        <div className={style.projectsContainer}>
            <div className={style.card}>
                <span className={["material-symbols-outlined"]}>storage</span>
                <h3>Data Structure</h3>
                <p className={style.projectText} >Various data structures and algorithms development in the Java language to understand their functionalities and advantages, while implementing and analyzing different types of structures to grasp their practical benefits..</p>
                <a href=""><img className={style.gitLogo} src="../../../src/img/github-logo.png" alt="" /></a>
            </div>
            <div className={style.card}>
                <span className={["material-symbols-outlined"]}>storage</span>
                <h3>Data Structure</h3>
                <p className={style.projectText} >Various data structures and algorithms development in the Java language to understand their functionalities and advantages, while implementing and analyzing different types of structures to grasp their practical benefits..</p>
                <a href=""><img className={style.gitLogo} src="../../../src/img/github-logo.png" alt="" /></a>
            </div>
            <div className={style.card}>
                <span className={["material-symbols-outlined"]}>storage</span>
                <h3>Data Structure</h3>
                <p className={style.projectText} >Various data structures and algorithms development in the Java language to understand their functionalities and advantages, while implementing and analyzing different types of structures to grasp their practical benefits..</p>
                <a href=""><img className={style.gitLogo} src="../../../src/img/github-logo.png" alt="" /></a>
            </div>
        </div>
        </div>
    )
}