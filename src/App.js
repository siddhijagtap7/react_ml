import {Route, Routes, Link } from 'react-router-dom';
import './App.css';
import MainPage from './components/mainpage';
import Display from './components/display';
import ROC from './components/roc';
import Precision from './components/precision';
import Algorithm from './components/algorithm';
import Data from './components/data';
function App() {
  return (
    <>
    <Routes>
    <Route exact path='/' element={< Display/>} />
    <Route exact path='/roc' element={< ROC/>} />
    <Route exact path='/pre_rec' element={< Precision/>} />
    <Route exact path='/algo' element={< Algorithm/>} />
    <Route exact path='/data' element={< Data/>} />
    </Routes>
    </>
  );
}

export default App;
