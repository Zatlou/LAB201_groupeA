import React from 'react';
import athleteBrest from './photos/Athlètes/ARetornaz.png'; // Import de l'image
import boat from './photos/boat.png';
import ellipse from './photos/Ellipse.png';

function Popup({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="popup">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>X</button>
        
        <div className="main-content">
          <div className="text-container"></div>
          {/* <div className="image-container">
            {/* Utilisation de l'image importée */}
           {/*  <img src={athleteBrest} alt="Athlète" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>  */}
          <div className="text-container">
            <h1><span class="first-name">ALOISE </span><span class="last-name">RETORNAZ</span></h1>
            <h2>30 ANS</h2>
            <p>Aloïse commence la voile jeune et se passionne pour ce sport. A 9 ans, elle effectue un stage d’Optimist à Brest, sa ville natale. Sa monitrice d’alors se nomme Camille Lecointre et deviendra, 17 ans plus tard, sa coéquipière aux Jeux Olympiques de Tokyo</p>
          </div>
          <div className="additional-info">
            <div className="info1">
              <div className='partOne'>
                <p style={{fontSize: '56px', marginTop: '0'}}>470</p>
                <img alt='boat' src={boat} style={{width: 'auto', height: '150px'}}/>
              </div> 
              <div className='palmares-info'>
                <p style={{color: '#81A8C3'}}>Palmares</p>
                <img src={ellipse}/>
                <img src={ellipse}/>
              </div>
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
