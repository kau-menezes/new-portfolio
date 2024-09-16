import style from "./experience.module.css"

export default function Experience() {
    return (
        <>
            <div className={style.xpCard}>
                <img className={style.ilustration} src="../../../src/img/Illustration-1.jpg" alt="" />
                <div>
                    <h3 className={style.xpTitle}>Cooperative Advertising Financial Internship</h3>
                    <p>dec 2023 - feb 2024</p>
                    <p className={style.text}> As an intern, I managed and audited media documentation to verify campaign execution and handled the processing of sales commissions. My role ensured accurate reporting and reconciliation of marketing expenses and commissions, enhancing financial efficiency and transparency.</p>
                </div>
            </div>
        </>

    )
}
