import './App.css';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3Alt, faFacebook, faGitAlt, faGithub, faHtml5, faInstagram, faJsSquare, faReact, faSass} from '@fortawesome/free-brands-svg-icons';
import { faChevronUp, faEnvelope, faSun } from '@fortawesome/free-solid-svg-icons'

function Nav() {
  return (
    <>
      <a href='#about'>About Me</a>
      <a href='#tools'>Tools</a>
      <a href='#projects'>Projects</a>
      <a href='#contact'>Contact</a>
    </>
  )
}

function App() {
  $(function() {})
  let bodyClass = document.getElementsByTagName('body')[0].classList;
  function toggle_DarkMode (){
    bodyClass.toggle('dark');
  }
  return (
    <div className="App">
      <div id='up'><a href='#welcome'><FontAwesomeIcon id='up-icon' icon={faChevronUp} /></a></div>
      <FontAwesomeIcon id='switch' onClick={toggle_DarkMode} icon={faSun} />
      <section id='welcome'>
       <div id='lines' >
        <div className='circle'></div>
        <div className='circle'></div>
        <div className='circle'></div>
        <div className='circle'></div>
        <div className='border-1'></div>
        <div className='border-2'></div>
       </div>
       <div id='nav-bar'> <Nav /></div>
        <div id='text-container'>
          <div class='text'>
              <h1>Welcome</h1>
              <p>My name is Bina. I'm a front-end developer based in Germany.</p>
              <p></p>
          </div>
        </div>
      </section>
      <section id='about'>
        <div id='about-container'>
              <h2>About Me</h2>
              <div id='profile'>
              <img src='https://images.pexels.com/photos/1741206/pexels-photo-1741206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''></img>
                  <div id='profile-container'>
                    <p><strong>Name: </strong></p><p>Bina</p>
                    <p><strong>Age: </strong></p><p>26</p>
                    <p><strong>Languages: </strong></p><p>Ukrainian, German, English, Russian</p>
                    <p><strong>Origin: </strong></p><p>Ukraine</p>
                    <p><strong>Based: </strong></p><p>Germany</p>
                  </div>
                </div>
              <p>
              Guided by the pursuit of creativity and improvement, I started my path as a web developer. <br />
              At this moment in my life, I'm improving daily in front-end development with the aim of one day 
              working on my projects as a full-stack developer.
              </p>
        </div>
      </section>
      <section id='tools'>
        <div id='tools-container'>
            <h2>My Tools: </h2>
            <div id='tool-list'>
                <div id='html'><FontAwesomeIcon className='tools-icon' id='html-icon' icon={faHtml5} /><p>HTML5</p></div>
                <div id='css'><FontAwesomeIcon className='tools-icon' id='css-icon' icon={faCss3Alt} /><p>CSS3</p></div>
                <div id='js'><FontAwesomeIcon className='tools-icon' id='js-icon' icon={faJsSquare} /><p>JavaScript</p></div>
                <div id='react'><FontAwesomeIcon className='tools-icon' id='react-icon' icon={faReact} /><p>React</p></div>
                <div id='sass'><FontAwesomeIcon className='tools-icon' id='sass-icon' icon={faSass} /><p>Sass</p></div>
                <div id='git'><FontAwesomeIcon className='tools-icon' id='git-icon' icon={faGitAlt} /><p>Git</p></div>
            </div>
        </div>
      </section>
      <section id='projects'>
        <div id='projects-container'>
          <h2>My Prodjects: </h2>
          <div className='project'>
            <div className='link'>
              <a id='travel' href='https://b-na.github.io/travel_photography_blog/' target='blank'><img src='https://images.pexels.com/photos/12825195/pexels-photo-12825195.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt></img></a>
            </div>
            <a href='https://b-na.github.io/travel_photography_blog/'><p>Travel Photographer</p></a>
          </div>
          <div className='project'>
            <div className='link'>
              <a id='deco' href='https://b-na.github.io/furniture_store/' target='blank'><img src='https://images.pexels.com/photos/12825195/pexels-photo-12825195.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt></img></a>
            </div>
            <a href='https://b-na.github.io/furniture_store/'><p>Furniture Store</p></a>
          </div>
        </div>
      </section>
      <section id='contact'>
        <div id='contact-container'>
          <p>Liked my projects? Contact me or just follow me on social media:</p>
          <a href='mailto:binawagner.contact@gmail.com'><FontAwesomeIcon id='mail-icon' icon={ faEnvelope } /></a>
          <a href='https://www.instagram.com/unicornbini'><FontAwesomeIcon id='insta-icon' icon={ faInstagram } /></a>
          <a href='https://www.facebook.com/unicornbini'><FontAwesomeIcon id='fb-icon' icon={ faFacebook } /></a>
          <a href='https://github.com/b-na'><FontAwesomeIcon id='github-icon' icon={ faGithub } /></a>
        </div>
      </section>
    </div>
  );
}

export default App;
