import About from "./components/About"
import Experience from "./components/Experience"
import Greetings from "./components/Greetings"
import Header from "./components/Header"
import Projects from "./components/Projects"
import "./index.css"
import style from "./App.module.css"
import Education from "./components/Education"

function App() {

  return (
    <>
      <Header/>
      <main>
        <Greetings/>
        <h1>ARRUMAR OS LINKS TÁ</h1>
        <About/>
        <hr className={style.hr}/>
        <Experience/>
        <hr className={style.hr}/>
        <Projects/>
        <Education/>
        <h1>working on it... 🚧</h1>
      </main>
    </>
  )
}

export default App
