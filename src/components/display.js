import React from 'react';
import './display.css';
import survived from '../images/image.png';
import Navbar from './Navbar';
function App() {
  return (
    <>
    <Navbar/>
    <div className="container">
    <h1 style = {{marginTop: '80px', color: 'white', backgroundColor:'#474747'}}>Survival Analysis</h1>
      <div className="image-container">
        <div className="image-wrapper">
          <img src={survived} alt="Survived" className="rounded-image" style = {{height:'500px'}}/>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
