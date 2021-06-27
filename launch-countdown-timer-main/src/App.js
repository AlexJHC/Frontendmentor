import './App.css';
import iconFacebook from './img/icon-facebook.svg'
import iconInstagram from './img/icon-instagram.svg'
import iconPinterest from './img/icon-pinterest.svg'
import FlipClock from './Counter/FlipClock'

function App() {
  return (
    <main className='main'>
      
        <h1>WE'RE LAUNCHING SOON</h1>
        <FlipClock />
        <footer>
          <ul>
            <li><a href="!#"><img src={iconFacebook} alt={'Facebook icon'} /></a></li>
            <li><a href="!#"><img src={iconInstagram} alt={'Instagram icon'} /></a></li>
            <li><a href="!#"><img src={iconPinterest} alt={'Pinterest icon'} /></a></li>
          </ul>
        </footer>
     
    </main>
  );
}

export default App; 
