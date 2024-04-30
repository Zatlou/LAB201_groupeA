import React from 'react';
import WaveComponent from './waveComponent.js'; 
import Square from './squareComponent.js';
import '../App.css';
import flecheRetour from './photos/flecheRetour.png';
import polygon6 from './photos/polygon6.png';
import backgroundImage from './photos/marseilleBack.png'; 
import flecheNav from './photos/FlecheNavDroite.png';
import MarseilleDetour from './photos/MarseilleDetour.png';

function MarseilleComponent() {
  const centerStyle = {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '90px', 
    color: '#E3BD5E',
    position: 'absolute',
    top: '5%',
    left: '60%',
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
    backgroundSize: '70% 70%',
    backgroundPosition: 'top right', // Positionne l'arrière-plan en haut à droite
    backgroundAttachment: 'fixed', // Fixe l'arrière-plan pour qu'il reste en place lors du défilement
    width: '100%',
    height: '100vh',
    
    position: 'relative',
  };
  

  const imageCenterStyle = {
    position: 'absolute',
    top: '140px',
    left: '80px',
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
      <h2 style={centerStyle}>Marseille</h2> 
      <div style={rectangleStyle}>
        <img src={flecheRetour} alt="Première image" style={{ width: '40px', height: '40px' }} />
        <img src={polygon6} alt="Deuxième image" style={{ width: '40px', height: '40px' }} />
      </div>
      <Square />
      <div style={imageCenterStyle}> 
        <img src={MarseilleDetour} alt="MarseilleImage" style={{ width: '450px', height: 'auto' }}  /> 
      </div>  
      <WaveComponent/>
      <img src={flecheNav} alt="Flèche" style={flecheStyle} />  
    </div>
  );
}

export default MarseilleComponent;
