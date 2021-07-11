import { useState } from "react"
import ReactLoading from 'react-loading';
import styles from "./Main.module.css"
import brand from './img/icon-brand-recognition.svg'
import detailed from './img/icon-detailed-records.svg'
import fully from './img/icon-fully-customizable.svg'
import Copy from "./Copy"
import Card from "./Card";


export default function Main(props) {
  // State
  const [link, setlink] = useState('')
  const [short, setShort] = useState([])
  const [isloading, setIsLoading] = useState(false)
  const [mistake, setMistake] = useState (false)

  // Card text props
  const cardInfo = [
    {img: brand,
    title:'Brand Recognition',
    text:'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.'},
    {img:detailed,
    title:'Detailed Records',
    text:'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.'},
    {img:fully,
    title:'Fully Customizable',
    text:'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.'},
  ]

  // Submit
  function hadleSubmit(e){
    e.preventDefault()
    getLink()
    setlink('')
    setIsLoading(!isloading)
    setMistake(false)
  }

  // Main link short async function
  async function getLink() {
    if (short.length > 9) {
      setShort([])
    } else { await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`)
    .then(res => res.json())
    .then((data) => {
      short.push({short:data.result.short_link, long:data.result.original_link})
      setShort(short);
      setIsLoading(false)
    })
     .catch(() => {
       setMistake (true)
       setIsLoading(false)
      })
    }
   } 
   
return (
  <section>
    <main>
      <form 
        onSubmit={(e) => hadleSubmit(e)}
        className={styles.form}>
          <input
            id='focusable-input'
            className={mistake ? styles.error: ''} 
            type="url" 
            placeholder="    Shorten a link here..." 
            value={link}
            onChange={(e) => setlink(e.target.value)}/>
          <span 
            className={mistake ? `${styles.warning} ${styles.error}`: styles.warning}>
            Please add a valid link or url
          </span>
  {!isloading && (
    <button 
      className={styles.btn}
      onClick={(e) => hadleSubmit(e)}>
      Shorten It!
    </button>
  )}
  {isloading && (
    <div 
      style={{display:"flex",alignItems:"center",marginLeft:'3%',width:'4.5rem'}}>
      <ReactLoading 
        type={'spinningBubbles'} 
        height={50}
        width={50}/>
    </div>
  )} 
      </form>
  {short && (
    <ul>
      {short.map((item,index) => {
        return <li key={index}>
          <div className={styles.fisrt}>
            {item.long}
          </div>
          <span style={{color:'var(--Cyan)'}}>
            {item.short}
          </span>
          <Copy value={item.short}/>
          </li>
      })
        }
    </ul> 
          )}
      <div className={styles.text} id='Card'>
        <h2>Advanced Statistics</h2>
        <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
      </div>
       <Card info={cardInfo}/>
       <span className={styles.line}></span>
    </main>
  </section>
    )
}

