import './App.css';

import Child from './components/child';
import Footer from './components/footer';
import Navbar from './components/navbar';

import { FaReact, FaAngular, FaPython, FaJava } from "react-icons/fa";
import { DiIonic, DiMongodb, DiGoogleCloudPlatform } from "react-icons/di"

import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();

  

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
          
            <img src='https://i.postimg.cc/K8wXgNNY/profile.jpg'></img>
          
          </div>
        </div>

        <div>

          <div className='tech-text'>
            {t("technologies")}
          </div>

          <div className='technologies'>

            <a href='https://es.reactjs.org/' target='_blank' rel="noreferrer">
              <button>
                <FaReact /> React
              </button>
            </a>
            
            <a href='https://angular.io/' target='_blank' rel="noreferrer">
              <button>
                <FaAngular /> Angular
              </button>
            </a>
            
            <a href='https://ionicframework.com/' target='_blank' rel="noreferrer">
              <button>
                <DiIonic /> Ionic
              </button>
            </a>
            
            <a href='https://www.mongodb.com/es' target='_blank' rel="noreferrer">
              <button>
                <DiMongodb /> MongoDB
              </button>
            </a>
            
            <a href='https://cloud.google.com/' target='_blank' rel="noreferrer">
              <button>
                <DiGoogleCloudPlatform /> Google Cloud
              </button>
            </a>
            
            <a href='https://www.python.org/' target='_blank' rel="noreferrer">
              <button>
                <FaPython /> Python
              </button>
            </a>
            
            <a href='https://www.java.com/es/' target='_blank' rel="noreferrer">
              <button>
                <FaJava /> Java
              </button>
            </a>
            
          </div>

        </div>

        
      
      </div>
      <Footer />
    </div>
  );
}

export default App;
