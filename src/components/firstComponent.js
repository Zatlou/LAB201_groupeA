import React from 'react';
import WaveComponent from './waveComponent.js'; 
import Square from './squareComponent';
import '../App.css';
import flecheRetour from './photos/flecheRetour.png';
import polygon6 from './photos/polygon6.png';
import backgroundImage from './photos/BackBrest.png'; 
import MarseilleImage from './photos/Marseille4 3.png';// Importez votre image d'arrière-plan
import flecheNav from './photos/FlecheNavDroite.png';

function FirstComponent() {
  
  const centerStyle = {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '90px', 
    color: '#323232',
    position: 'absolute', // Position absolue
    top: '5%', // Aligner au milieu de l'écran
    left: '50%', // Aligner au centre de l'écran
    transform: 'translate(-50%, -50%)', // Centrer correctement
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
    backgroundImage: `url(${backgroundImage})`, // Définissez l'image d'arrière-plan
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 75%',
    // Empêchez la répétition de l'image
    width: '100%',
    height: '100vh', // Taille de l'image égale à la taille de l'écran
    position: 'relative', // Position relative pour positionner le titre
  };
  const imageCenterStyle = {
    position: 'absolute', // Position absolue pour centrer l'image
    top: '30%', // Aligner au milieu de l'écran
    left: '25%', // Aligner au centre de l'écran
    // Changer la largeur de l'image à 100px
   // Hauteur automatique pour conserver les proportions
    
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
      <h2 style={centerStyle}>BREST</h2> 
      <div style={rectangleStyle}> {/* Contenu supplémentaire */}
        <img src={flecheRetour} alt="Première image" style={{ width: '40px', height: '40px' }} />
        <img src={polygon6} alt="Deuxième image" style={{ width: '40px', height: '40px' }} />
      </div>
      <Square />
      <div style={imageCenterStyle}> 
        <img src={MarseilleImage} alt="MarseilleImage" style={{ width: '280px', height: 'auto' }}  /> 
      </div>  
      <WaveComponent/>
                
      <img src={flecheNav} alt="Flèche" style={flecheStyle} />  
      <saintMaximeComponent/>
    </div>
  );
}

export default FirstComponent;
