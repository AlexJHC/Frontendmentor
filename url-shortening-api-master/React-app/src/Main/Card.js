import styles from "./Main.module.css"

// Cards info component
export default function Card(props) {
  return(
    <div className={styles.card}>
      {props.info.map((item,index) => {
        return <div key={index} className={styles.cardContainer}>
         <img 
          src={item.img} 
          alt={item.title}/>
         <h3>{item.title}</h3>
         <p>{item.text}</p>
         </div>})}
    </div>
  )
}