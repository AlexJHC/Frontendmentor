import { useState } from "react"
import {CopyToClipboard} from 'react-copy-to-clipboard'
import styles from "./Main.module.css"

  //Copy to Clipboard component 
export default function Copy(props) {
  // State
  const [isCopied, setIsCopied ] = useState(false)

  return(
  <>
    <CopyToClipboard 
        text={props.value}
        onCopy={() => setIsCopied(true)}>
      <button 
        className={isCopied ? `${styles.btn} ${styles.copied}`:styles.btn}>{isCopied ? 'Copied!':'Copy'}</button>
    </CopyToClipboard>
  </>
  )
}