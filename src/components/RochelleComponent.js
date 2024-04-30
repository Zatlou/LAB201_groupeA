import React from 'react';
import WaveComponent from './waveComponent.js'; 
import Square from './squareComponent.js';
import '../App.css';
import flecheRetour from './photos/flecheRetour.png';
import polygon6 from './photos/polygon6.png';
import backgroundImage from './photos/BackSainteMaxime.png'; 
import MarseilleImage from './photos/Marseille4 3.png';
import flecheNav from './photos/FlecheNavDroite.png';

function RochelleComponent() {
  const centerStyle = {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '90px', 
    color: '#323232',
    position: 'absolute',
    top: '5%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    letterSpacing: '47px',  
  };

  const rectangleStyle = {
    position: 'absolute',
    top: '10px',
    width: '150px',
    height: '90px',
    backgroundColor: '#737272',
    opacity: '50%',
    borderRadius: '0px 30px 30px 0px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  };

  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 75%',
    width: '100%',
    height: '100vh',
    position: 'relative',
  };

  const imageCenterStyle = {
    position: 'absolute',
    top: '30%',
    left: '25%',
  };
  
  const flecheStyle = {
    position: 'absolute',
    bottom: '-70px',
    right: '0px',
    width: '25%',
    height: 'auto',
    zIndex: '2',
  };

  return (
    <div style={containerStyle}>
      <h2 style={centerStyle}>ROCHELLE</h2> 
      <div style={rectangleStyle}>
        <img src={flecheRetour} alt="Première image" style={{ width: '40px', height: '40px' }} />
        <img src={polygon6} alt="Deuxième image" style={{ width: '40px', height: '40px' }} />
      </div>
      <Square />
      <div style={imageCenterStyle}> 
        <img src={MarseilleImage} alt="MarseilleImage" style={{ width: '280px', height: 'auto' }}  /> 
      </div>  
      <WaveComponent/>
      <img src={flecheNav} alt="Flèche" style={flecheStyle} />  
    </div>
  );
}

export default RochelleComponent;
