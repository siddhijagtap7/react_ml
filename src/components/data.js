import React from 'react';
import Navbar from './Navbar';
import './data.css';
function App() {
  return (
    <>
    <Navbar/>
    <div className="dataset">
      <div className="description">
        <h2>Dataset Name: Titanic: Machine Learning from Disaster</h2>
        <h3>Source: The dataset is often used in data science and machine learning courses and competitions on Kaggle. It's based on the passenger list of the Titanic, which famously sank on its maiden voyage in 1912.</h3>
        <h3>Data Description:</h3>
       <div className='contents'>
       The dataset consists of two CSV (Comma-Separated Values) files: train.csv and test.csv. Typically, train.csv is used for training machine learning models, while test.csv is used for making predictions.
       </div>
      </div>
    </div>
    </>
  );
}

export default App;
