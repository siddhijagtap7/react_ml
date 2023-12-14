import React from 'react';
import './display.css';
import algorithm from '../images/algorithm_scores.png';
import Navbar from './Navbar';
function App() {
  return (
    <>
    <Navbar/>
    <div className="container">
      <h1 style = {{marginTop: '80px', color: 'white', backgroundColor:'#474747'}}>Algorithm Analysis</h1>
      <div className="image-container">
        
        <div className="image-wrapper">
          <img src={algorithm} alt="Algorithm Scores" className="rounded-image" />
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
