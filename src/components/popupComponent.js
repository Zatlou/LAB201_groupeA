import React from 'react';

function Popup({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="popup">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>X</button>
        
        <div className="main-content">
          <div className="image-container">
            
            <img src="./components/photos/Athlètes/ARetornaz.png" alt="Votre image" />
          </div>
          <div className="text-container">
           <h1>ALOISE RETORNAZ</h1>
            <p>Aloïse commence la voile jeune et se passionne pour ce sport. A 9 ans, elle effectue un stage d’Optimist à Brest, sa ville natale. Sa monitrice d’alors se nomme Camille Lecointre et deviendra, 17 ans plus tard, sa coéquipière aux Jeux Olympiques de Tokyo.i</p>
          </div>
          <div className="additional-info">
            <div className="info1">
              
              <p>Info 1</p>
            </div>
            <div className="info2">
              
              <p>Info 2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
