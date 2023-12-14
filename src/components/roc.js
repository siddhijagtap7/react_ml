import React from 'react';
import './display.css';
import roc from '../images/roc_curve.png';
import Navbar from './Navbar';
function App() {
  return (
    <>
    <Navbar/>
    <div className="container">
      <h1 style = {{marginTop: '80px', color: 'white', backgroundColor:'#474747', padding: '10px'}}>ROC Curve</h1>
        <div className="image-wrapper">
          <img src={roc} alt="ROC Curve" className="rounded-image" />
        </div>
    </div>
    </>
  );
}

export default App;
