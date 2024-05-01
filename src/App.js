// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import './App.css'; // mportez les styles globaux
import BrestComponent from './components/BrestComponent';
import saintMaximeComponent from './components/saintMaximComponent';
import MarseilleComponent from './components/marseilleComponent';
import RochelleComponent from './components/Rochelle/RochelleComponent';
function App() {
  return (
  
    <Router>
    <Routes>
      <Route exact path="/" element={<BrestComponent />} />
      <Route path="/rochelle" element={<RochelleComponent />} />
      {/* Ajoutez d'autres routes ici */}
    </Routes>
  </Router>
    
  );
}

export default App;