import React from 'react';
import WaveComponent from '../waveComponent.js'; 
import Square from '../squareComponent.js';
import Icone from '../photos/Icône Ville.png'
import flecheRetour from '../photos/Gauche.png';
import polygon6 from '../photos/polygon6.png';
import backgroundImage from '../photos/BackLaRochelle.png'; 
import RochelleImage from '../photos/villes/ville/La Rochelle.png';
import flecheNav from '../photos/FlecheNavDroite.png';

function RochelleComponent() {
  

  const rectangleStyle = {
    position: 'absolute',
    top: '10px',
    width: '160px',
    height: '100px',
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
    backgroundSize: '85% 100%',
    width: '100%',
    height: '90vh',
    position: 'relative',
  };

  const imageCenterStyle = {
    position: 'absolute',
    top: '-16%',
     right: '20%',

    width: '80%',
    height: 'auto',
    zIndex: '1',  // Ce zIndex permet de positionner l'image entre les deux vagues
  };
  
  
  const flecheStyle = {
    position: 'absolute',
    bottom: '-70px',
    right: '0px',
    width: '25%',
    height: 'auto',
    zIndex: '2',
  };
  const Icone = {
    position: 'absolute',
    
  };
  const title ={
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
  const city={
  
  };
  return (
    <div style={containerStyle}>
      <img src={Icone} alt="RochelleIcone" style={{ width: '100%', height: 'auto' }}  /> 
      <h1 style={title}>49ER</h1>
      <h4 style={city}>LA ROCHELLE</h4>
      <div style={rectangleStyle}>
        <img src={flecheRetour} alt="Première image" style={{ width: '50px', height: '65px' }} />
        <img src={polygon6} alt="Deuxième image" style={{ width: '50px', height: '50px' }} />
      </div>
      <Square />
      <div style={imageCenterStyle}> 
        <img src={RochelleImage} alt="RochelleImage" style={{ width: '100%', height: 'auto' }}  /> 
      </div>  
     <WaveComponent/>
      <img src={flecheNav} alt="Flèche" style={flecheStyle} />  
    </div>
  );
}

export default RochelleComponent;
