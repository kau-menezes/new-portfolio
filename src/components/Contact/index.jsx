/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import style from "./contact.module.css"

import git from "../../img/github-logo.png"
import pic from "../../img/20240509_160847.jpg"
import insta from "../../img/linkedin-app-white-icon.png"
import mail from "../../img/envelope.png"
import zap from "../../img/whatsapp.png"

import { Tooltip } from 'react-tooltip'
import { useEffect, useState } from "react"

export default function Contact() {

  // const [tooltip, setTooltip] = useState(false)

  // useEffect( ()=> {
  //   tooltip ? document.getElementById("my-tooltip").setAttribute("display", "none") : document.getElementById("my-tooltip").setAttribute("display", "block") 
  // })

  const copyToClipboard = async () => {
      try {
        await navigator.clipboard.writeText('https://www.youtube.com/?app=desktop&hl=pt');
        console.log('Texto copiado para a área de transferência');
      } catch (err) {
        console.log('Falha ao copiar o texto', err);
      }
    };

    const whatsappMessage = () => {
      let number = "5541998967619"
      window.open("https://wa.me/" + number + "?text=Hi, Kauane! I saw your portfolio online and got interested in your work. Let's chat! :)", "_blank")
    }
    
    return(
        <div className={style.contactContainer}>
            <div className={style.left}>
                <h2>Interested in my work?</h2>
                <h3>Let's chat! 🚀</h3>
                <Tooltip id="my-tooltip"/>
                <ul className={style.ulLogo}>
                    <li><a href="https://github.com/kau-menezes" target="blank"><img className={style.logo} src={git} alt=""/></a></li>
                    <li><a href="https://www.linkedin.com/in/kauane-menezes/"><img className={style.logo} src={insta} alt=""/></a></li>
                    <li><a><img onClick={whatsappMessage} className={style.logo} src={zap} alt=""/></a></li>
                    <li><a><img onClick={copyToClipboard} data-tooltip-id="my-tooltip" data-tooltip-content="Copied!" className={style.logoMail} src={mail} alt=""/></a></li>
                </ul>
            </div>
            <div className={style.right}>
              <img className={style.pic} src={pic} alt="" />
            </div>
        </div>
    )
}