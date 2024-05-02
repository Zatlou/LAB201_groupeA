import React from 'react';
import '../components/waveComponent.css'; 
import wavePiece1 from './photos/Vagues/SDArrière.png';
import wavePiece2 from './photos/Vagues/SDavant.png';



function WaveComponent() {
  return (
    <div className="scroll-container">
      <img
        src={wavePiece1}
        alt="Morceau de vague 1"
        className="wave wave1"
        style={{
           position:'absolute',
           
           width:'100%',
           
           height: '60%',
           bottom:'-70px',
           zIndex: '0',
            left: '12px',
            
        }}
      />
      <img
        src={wavePiece2}
        alt="Morceau de vague 2"
        className="wave wave2"
        style={{
          width:'100%',
          height: '80%',
         rotate:'-3deg',
         bottom:'-110px',
         left:'-9px',
          zIndex: '2', 
         
          scrollbarWidth: 'none'
          

        }}
      />
    </div>
  );
}

export default WaveComponent;
