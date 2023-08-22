import $ from 'jquery';
import './App.css';
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

  $(function() {
  let bodyClass = $('body')[0].classList;
  let body_bgc = $('body');
  let dark_mode = $('.dark-element');
  let light_mode = $('.light-element');

  function toDark() {
      localStorage.setItem('dark', true);
      dark_mode.css("opacity", "1");
      light_mode.css("opacity", "0");
      body_bgc.css("backgroundColor", '#1a1a1a');
  }
  function toLight() {
      localStorage.setItem('dark', false);
      light_mode.css("opacity", "1");
      dark_mode.css("opacity", "0");
      body_bgc.css("backgroundColor", '#cbbfff');
  }

  function toggle_DarkMode (){
    bodyClass[0] === 'dark' ? toLight() : toDark();
    bodyClass.toggle('dark');
  }

  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    if (!(localStorage.hasOwnProperty('dark'))) {
       bodyClass.add('dark');
       toDark();
    }
  } else {
    if (!(localStorage.hasOwnProperty('dark'))) {
        bodyClass.remove('dark');
        toLight();
    }
  }

  if (localStorage.hasOwnProperty('dark')) {
    if (localStorage.getItem('dark') === 'true') {
       bodyClass.add('dark');
       toDark();
    }
    else if (localStorage.getItem('dark') === 'false') {
       bodyClass.remove('dark');
       toLight();
    }
  }

  if (!(localStorage.hasOwnProperty('dark'))) {
    bodyClass.add('dark');
    toDark();
  }

  $('#switch').on("click", toggle_DarkMode)
})

  return (
    <div className="App">
      <div id='up'><a href='#welcome'><FontAwesomeIcon id='up-icon' icon={faChevronUp} /></a></div>
      <FontAwesomeIcon id='switch' icon={faSun} />
      <section id='welcome'>
        <div className='welcome-bg dark-element' />
        <div className='welcome-bg light-element' />
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
              <div id='photo-container'><img src='my_photo_ai.webp' alt='' loading='lazy'></img></div>
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
        <div className='mouse dark-element'/>
        <div className='mouse light-element'/>
        <div id='tools-container'>
            <h2>My Tools: </h2>
            <div id='tool-list'>
                <div id='html'><FontAwesomeIcon className='tools-icon' id='html-icon' icon={faHtml5} /><p>HTML5</p></div>
                <div id='css'><FontAwesomeIcon className='tools-icon' id='css-icon' icon={faCss3Alt} /><p>CSS3</p></div>
                <div id='js'><FontAwesomeIcon className='tools-icon' id='js-icon' icon={faJsSquare} /><p>JavaScript</p></div>
                <div id='react'><FontAwesomeIcon className='tools-icon' id='react-icon' icon={faReact} /><p>React</p></div>
                <div id='sass'><FontAwesomeIcon className='tools-icon' id='sass-icon' icon={faSass} /><p>Sass</p></div>
                <div id='git'><FontAwesomeIcon className='tools-icon' id='git-icon' icon={faGitAlt} /><p>Git</p></div>
                <div id='gitgub'><FontAwesomeIcon className='tools-icon' id='github-icon' icon={faGithub} /><p>GitHub</p></div>
            </div>
        </div>
      </section>
      <section id='projects'>
          <div class='projects-bg dark-element'></div>
          <div class='projects-bg light-element'></div>
        <div id='projects-container'>
          <h2>My Prodjects: </h2>
          <div className='project'>
            <div className='link'>
              <a id='travel' href='https://b-na.github.io/travel_photography_blog/' target='blank'><img src='./projects/travel_photography_blog.webp' alt="" loading='lazy'></img><div className='project-overlay' /></a>
              <div className='shadow'></div>
            </div>
            <a href='https://b-na.github.io/travel_photography_blog/'><p>Travel Photography Blog</p></a>
          </div>
          <div className='project'>
            <div className='link'>
              <a id='deco' href='https://b-na.github.io/furniture_store/' target='blank'><img src='./projects/funrniture_store.webp' alt="" loading='lazy'></img><div className='project-overlay' /></a>
              <div className='shadow'></div>
            </div>
            <a href='https://b-na.github.io/furniture_store/'><p>Furniture Store</p></a>
          </div>
        </div>
      </section>
      <section id='contact'>
        <div class='contact-bg dark-element'></div>
        <div class='contact-bg light-element'></div>
        <div id='contact-container'>
          <p>Liked my projects? Contact me or just follow me on social media:</p>
          <a href='mailto:binawagner.contact@gmail.com' target='blanck'><FontAwesomeIcon id='mail-icon' icon={ faEnvelope } /></a>
          <a href='https://www.instagram.com/unicornbini' target='blanck'><FontAwesomeIcon id='insta-icon' icon={ faInstagram } /></a>
          <a href='https://www.facebook.com/unicornbini' target='blanck'><FontAwesomeIcon id='fb-icon' icon={ faFacebook } /></a>
          <a href='https://github.com/b-na' target='blanck'><FontAwesomeIcon id='github-icon' icon={ faGithub } /></a>
        </div>
      </section>
    </div>
  );
}

export default App;
