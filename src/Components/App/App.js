import './App.css';

//Components
import Jack from '../Jack/jack';
import Cherry from '../Cherry/cherry';
import Tag from '../Tag/tag';
import TechStack from '../TechStack/techStack';
import AboutMe from '../AboutMe/aboutMe';
import Projects from '../Projects/projects';
import NavBar from '../NavBar/navBar';
import Contact from '../Contact/contact';

function App() {
  return (
    <div className='main'>
    <NavBar/>
    <div className="App">
    <Jack/>
    <Cherry/>
    <Tag/>
    <TechStack/>
    <AboutMe/>
    <Projects/>
    <Contact/>
    </div>
    </div>
  );
}

export default App;
