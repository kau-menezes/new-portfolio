/* eslint-disable react/no-unescaped-entities */
import style from "./education.module.css"

import senaiLogo from "../../../src/img/unibrasil.jpg"

export default function Education() {
    return (
        <div className={style.eduContainer}>
            <h2>Education</h2>
            <div className={style.eduCard}>
                <img className={style.ilustration} src={senaiLogo} alt="" />
                <div className={style.eduInfo}>
                    <h3 className={style.eduTitle}>Software Engineering Degree</h3>
                    <p>2024 - 2027</p>
                    <p className={style.text}>UniBrasil</p>
                </div>
            </div>
            <div className={style.eduCard}>
                <img className={style.ilustration} src={senaiLogo} alt="" />
                <div className={style.eduInfo}>
                    <h3 className={style.eduTitle}>Systems Analysis and Development</h3>
                    <p>2024 - 2025</p>
                    <p className={style.text}>UniBrasil</p>
                </div>
            </div>
        </div>

    )
}