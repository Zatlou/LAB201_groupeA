import React from 'react';
import WaveComponent from './waveComponent.js'; 
import Square from './squareComponent.js';
import IconeBrest from './photos/Icône VilleBrest.png';
import flecheRetour1 from './photos/Gauche.png';
import flecheRetour2 from './photos/Gauche.png';
import flecheSuivant from './photos/Droite.png';
import polygon6 from './photos/polygon6.png';
import backgroundImage from './photos/BackBrest 1 (1).png'; 
import BrestImage from './photos/villes/ville/Brest.png';
import BateauImage from './photos/Bateaux/KiteFoilFinal.png';
import './Rochelle/rochelle.css';
import { useNavigate } from 'react-router-dom';


function BrestComponent() {
  
    const navigate = useNavigate();
  
    // Fonction pour gérer le clic sur l'image suivante
    const handleNextClick = () => {
      navigate('/rochelle'); // Navigue vers la page Rochelle
    };
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
    top: '-37%',
    
    left:'-20%',
    width: '90%',
    height: 'auto',
    zIndex: '1',  // Ce zIndex permet de positionner l'image entre les deux vagues
  };
  
  
  const flecheStyle= {
    position: 'absolute',
    bottom: '-70px',
    right: '0px',
    width: '25%',
    height: 'auto',
    zIndex: '2',
  };
  const IconeRoche = {
   width:'90px',
   position: 'absolute',
   top: '17%',
   left: '14%',
  };
  const title ={
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '100px', 
    color: '#323232',
    position: 'absolute',
    top: '5%',
    left: '30%',
    transform: 'translate(-50%, -50%)',
    letterSpacing: '47px',
  };
  const city={
    position: 'absolute',
    top: '20%',
    left: '20%',
  };
  const bateauStyle = {
    position: 'absolute',
    bottom: '10%',  // Ajustez selon l'espace nécessaire au bas
    right: '5%',    // Ajustez pour aligner à droite
    width: '200px', // Défini déjà, assurez-vous que c'est la bonne taille
    height: 'auto', // Maintient le ratio de l'image
    zIndex: '2'     // Assurez-vous que ceci est correct pour votre disposition des vagues
  };
  const handleRochelleClick = () => {
    console.log('Cercle Rochelle cliqué');
  };

  const handleBateauClick = () => {
    console.log('Cercle Bateau cliqué');
  };
  const clickableCircle = {
    position: 'absolute',
    borderRadius: '50%',    // Rend le div circulaire
    backgroundColor: '#D9D9D9',
    opacity: '0.5',         // 50% d'opacité
    cursor: 'pointer',      // Indique que l'élément est cliquable
  };

  // Position et dimension des cercles
  const rochelleCircleStyle = {
    ...clickableCircle,
    top: '35%',             // Ajustez en fonction de l'emplacement de l'image de Rochelle
    left: '40%',
    width: '80px',
    height: '80px',
    backgroundColor:'#959595',
    opacity:'50%'
  };

  const bateauCircleStyle = {
    ...clickableCircle,
    bottom: '23%',          // Ajustez en fonction de l'emplacement de l'image du bateau
    right: '20%',
    width: '80px',
    height: '80px',
    zIndex:'3',
    backgroundColor:'#959595',
    opacity:'50%'
  };
  const para = {
    position: 'absolute',
    color: 'black',
    fontSize: '20px',
    fontWeight: 'normal',  // Définit le poids de la police à normal (regular)
    whiteSpace: 'normal', 
    right:'6%',
    top:'20%',
   
   width:'10%'
     // Assure que le texte revienne à la ligne normalement
};
const containerHidden={
  overflow: 'hidden',
  width:'100%',
  height:'100vh'
}
  return (
    <div style={containerHidden} >
    <div style={containerStyle}>
      <img src={IconeBrest} alt="RochelleIcone" style={IconeRoche}  /> 
      <h1 style={title}>470</h1>
      <h4 className="special-h4">BREST</h4>

      <div style={rectangleStyle}>
        <img src={flecheRetour1} alt="Première image" style={{ width: '50px', height: '65px' }} />
        <img src={polygon6} alt="Deuxième image" style={{ width: '50px', height: '50px' }} />
      </div>
      <p style={para}>Découvrez l’athlète originaire de ce port </p>
      <Square />
      <div style={imageCenterStyle}> 
        <img src={BrestImage} alt="RochelleImage" style={{ width: '100%', height: 'auto' }}  /> 
        <div style={rochelleCircleStyle} onClick={handleRochelleClick}></div>
      </div>  
      <div >
      <img src={BateauImage} alt="BateauImage" style={{width: '200px', height: 'auto', position: 'absolute', bottom: '3%',right: '23%', zIndex: '2',  rotate:'20deg'}}  /> 
      <div style={bateauCircleStyle} onClick={handleBateauClick}></div>
      </div>
     <WaveComponent/>
      <img src={flecheSuivant} alt="Flèche" style={{ width: '50px', height: '65px' , zIndex:'3',position: 'absolute',bottom: '10px',right: '70px',
    }} onClick={handleNextClick} /> 
      <img src={flecheRetour2} alt="Flèche" style={{ width: '50px', height: '65px', zIndex:'3', position: 'absolute',left: '60px', bottom: '10px',
   }} />   
    </div>
    </div>
  );
}


export default BrestComponent;
