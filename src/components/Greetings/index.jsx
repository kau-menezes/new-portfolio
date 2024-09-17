import style from "./greetings.module.css"

export default function Greetings() {
    return (
    <>
        <div>
            <div className={style.greetings}>
                <h1>Hi, I'm</h1>
                <h1 className={style.nameGreetings}>Kauane</h1>
            </div>
            <h1>nice to meet you!</h1>
            <div className={style.specificationGreetings}>
                <h4>IT Apprentice at Bosch</h4>
                <h4 id="gender">she/ her</h4>
            </div>
        </div>
    </>
    )
}