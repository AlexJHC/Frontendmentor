import styles from './Footer.module.css'
import instagram from './img/icon-instagram.svg'
import pinterest from './img/icon-pinterest.svg'
import twitter from './img/icon-twitter.svg'
import facebook from './img/icon-facebook.svg'
import logo from '../Header/img/logo.svg'
import {HashLink as Link} from 'react-router-hash-link';

// Get Started
export default function Footer(){
  return (
  <footer id='Footer'>
    <div className={styles.promo}>
      <h2>Boost your links today</h2>
      <button className={styles.btn}><Link smooth to={'/page#focusable-input'}>Get Started</Link></button>
    </div>
    <div className={styles.wrapper}>
      <div className={styles.logoHolder}>
        <img 
          className={styles.logo} 
          src={logo} 
          alt="Shortly logo"/>
      </div>
      <nav className={styles.footer_nav}>
      <div>
        <h4>Features</h4>
        <ul>
         <li>Link Shortening</li>
          <li>Branded Links</li>
          <li>Analytics</li>
        </ul>
      </div>
      <div>
        <h4>Resources</h4>
        <ul>
         <li>Blog</li>
          <li>Developers</li>
          <li>Support</li>
        </ul>
      </div>
      <div>
        <h4>Company</h4>
        <ul>
         <li>About</li>
          <li>Our Team</li>
          <li>Careers</li>
          <li>Contact</li>
        </ul>
      </div>
      </nav>
      <div className={styles.social}>
      <img 
        src={facebook} 
        alt="icon facebook" 
        width="32" height="32"/>
      <img 
        src={twitter} 
        alt="icon twitter" 
        width="32" height="32"/>
      <img 
        src={pinterest} 
        alt="icon pinterest" 
        width="32" height="32"/>
      <img 
        src={instagram} 
        alt="icon instagram" 
        width="32" height="32"/>
      </div>
    </div>
  </footer> 
  )
}