import styles from './Header.module.css'
import logo from './img/logo.svg'
import working from './img/illustration-working.svg'
import React, { useState } from 'react'
import {HashLink as Link} from 'react-router-hash-link';
// import { HashLink as Link } from 'react-router-hash-link';


export default function Header() {

  // State
  const [active, setActive] = useState(false)

  // Test overflow while mobile menu
  function toggle(){
    if (active !== true) {
      setActive(true)
    } else {
      setActive(false)
    }
  }

  // <li><a href='#Form' onClick={url} style={{cursor:'pointer'}}>Features</a></li> 

  return (
    <header>
    {/* Nav bar links from react-router*/}
      <nav>
        <div>
          <img 
            src={logo} 
            alt="Shortly logo"/>
        </div>
      <div className={active ? `${styles.subMenu} ${styles.show}`: styles.subMenu}>
        <ul>
          <li>
            <Link smooth to={'/page#Header'} onClick={toggle}>
              Features
            </Link>
          </li>
          <li>
            <Link smooth to={'/page#Card'} onClick={toggle}>
              Pricing
            </Link>
          </li>
          <li>
            <Link smooth to={'/page#Footer'} onClick={toggle}>
            Resources
            </Link>
          </li>
        </ul>
        <div className={styles.buttons}>
          <button className={styles.login}>Login</button>
          <button className={styles.signUp}>Sign Up</button>
        </div>
      </div>
      {/* Hamburger menu for mobile */}
        <div className={active ? `${styles.humburger} ${styles.rotate}`: styles.humburger} onClick={toggle}>
          <span className={active ? `${styles.humburgerElem} ${styles.move}`: styles.humburgerElem}></span>
        </div>
      </nav>
      <div className={styles.content}>
        <div
          id='Header' 
          className={styles.text}>
          <h1>More than just shorter links</h1>
          <p>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
          <button className={styles.getStarted}><Link smooth to={'/page#focusable-input'}>Get Started</Link></button>
        </div>
         <div className={styles.imageHolder}>
           <img
            className={styles.image}
            src={working} alt="Working" /> 
        </div> 
      </div>
    </header>
  )
}