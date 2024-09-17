/* eslint-disable react/no-unescaped-entities */

import boschLogo from "../../../src/img/bosch-logo-final.png"
import vpcLogo from "../../../src/img/Illustration-1.jpg"

import style from "./experience.module.css"

export default function Experience() {
    return (
        <div className={style.xpContainer}>
            <h2 className={style.title}>Experiences</h2>
            <div className={style.xpCardsContainer}>
            <div className={style.xpCard}>
                <img className={style.ilustration} src={boschLogo} alt="" />
                <div className={style.xpInfo}>
                    <h3 className={style.xpTitle}>IT Apprentice Bosch</h3>
                    <p>Feb/2024 - Current Time</p>
                    <p className={style.text}> Currently, I'm participating at Bosch's Digital Solutions program as an appretince, studying at full time and diving into subjects concerning Back-End and Front-End development and IoT projects and applications.</p>
                </div>
            </div>
            <div className={style.xpCard}>
                <img className={style.ilustration} src={vpcLogo} alt="" />
                <div className={style.xpInfo}>
                    <h3 className={style.xpTitle}>Cooperative Advertising Financial Internship</h3>
                    <p>Dec/2023 - Feb/2024</p>
                    <p className={style.text}> As an intern, I managed and audited media documentation to verify campaign execution and handled the processing of sales commissions. My role ensured accurate reporting and reconciliation of marketing expenses and commissions, enhancing financial efficiency and transparency.</p>
                </div>
            </div>
            </div>
        </div>

    )
}
