import React from 'react';
import './display.css';
import prec_recall from '../images/precision_recall_curve.png';
import Navbar from './Navbar';
function App() {
  return (
    <>
    <Navbar/>
    <div className="container">
    <h1 style = {{marginTop: '80px', color: 'white', backgroundColor:'#474747'}}>Precision Recall Curve</h1>
      <div className="image-container">
        <div className="image-wrapper">
          <img src={prec_recall} alt="Precision-Recall Curve" className="rounded-image" />
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
