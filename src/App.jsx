import About from "./components/About"
import Experience from "./components/Experience"
import Greetings from "./components/Greetings"
import Header from "./components/Header"
import Projects from "./components/Projects"
import "./index.css"
import style from "./App.module.css"
import Education from "./components/Education"
import Contact from "./components/Contact"

function App() {

  return (
    <>
      <Header/>
      <main>
        <Greetings id="about"/>
        <About/>
        <hr className={style.hr} id="experience"/>
        <Experience/>
        <hr className={style.hr} id="projects"/>
        <Projects />
        <Education/>
        <Contact/>
        <h1>working on it... 🚧</h1>
      </main>
    </>
  )
}

export default App
