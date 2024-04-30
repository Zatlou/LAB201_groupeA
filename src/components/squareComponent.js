import React, { useState } from 'react';
import Popup from './popupComponent';
import '../components/squareComponent.css'; 

function Square() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleSquareClick = () => {
    setIsPopupOpen(true);
    
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div>
      <div className="square" onClick={handleSquareClick}></div>
      <Popup isOpen={isPopupOpen} onClose={handleClosePopup} />
    </div>
  );
}

export default Square;
