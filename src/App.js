import './App.css';

import Child from './components/child';
import Footer from './components/footer';
import Navbar from './components/navbar';

import { FaReact, FaAngular, FaPython, FaJava } from "react-icons/fa";
import { DiIonic, DiMongodb, DiGoogleCloudPlatform } from "react-icons/di"

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='container'>

        <div className='columns'>
          <div className='col1'>
            <h1 className='name'>Omar Alejandro Sánchez Cuevas</h1>
            <Child  />
          </div>
          <div className='profile-img'>
          
            <img src='https://i.postimg.cc/K8wXgNNY/profile.jpg' alt='Profile Image'></img>
          
          </div>
        </div>

        <div>

          <div className='tech-text'>
            Tecnologias que manejo
          </div>

          <div className='technologies'>
          
            <button>
              <FaReact /> React
            </button>

            <button>
              <FaAngular /> Angular
            </button>

            <button>
              <DiIonic /> Ionic
            </button>

            <button>
              <DiMongodb /> MongoDB
            </button>

            <button>
              <DiGoogleCloudPlatform /> Google Cloud
            </button>

            <button>
              <FaPython /> Python
            </button>

            <button>
              <FaJava /> Java
            </button>

          </div>

        </div>

        
      
      </div>
      <Footer />
    </div>
  );
}

export default App;
