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
                <a target="_blank" href="https://github.com/kau-menezes/JavaFinalProject_BOSCH.git"><img className={style.gitLogo} src="../../../src/img/github-logo.png" alt="" /></a>
            </div>
            <div className={style.card}>
                <span className={["material-symbols-outlined"]}>nutrition</span>
                <h3>NutrifyHub</h3>
                <p className={style.projectText} >This full-stack application is designed to enhance the healthcare and nutrition experience by connecting nutritionists and their patients through a comprehensive platform. The application offers a range of functionalities to facilitate effective communication and personalized nutrition management. </p>
                <a target="_blank" href="https://github.com/kau-menezes/NutrifyHub-Back.git"><img className={style.gitLogo} src="../../../src/img/github-logo.png" alt="" /></a>
            </div>
            <div className={style.card}>
                <span className={["material-symbols-outlined"]}>calculate</span>
                <h3>Scientific Calculator</h3>
                <p className={style.projectText} >Desktop application built using C# and the WindowsForms framework as a means of developing a calculator with advenced functionalities, to offer a sofisticated tool for mathmatical calculations.</p>
                <a target="_blank" href="https://github.com/kau-menezes/ScientificCalculator.git"><img className={style.gitLogo} src="../../../src/img/github-logo.png" alt="" /></a>
            </div>
        </div>
        </div>
    )
}