import React from 'react';

function Popup({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="popup">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>X</button>
        
        <div className="main-content">
          <div className="image-container">
            {/* Insérez ici votre contenu d'image */}
            <img src="votre_image.jpg" alt="Votre image" />
          </div>
          <div className="text-container">
            {/* Insérez ici votre contenu de texte */}
            <p>Votre texte ici</p>
          </div>
          <div className="additional-info">
            <div className="info1">
              {/* Insérez ici le contenu de la première info */}
              <p>Info 1</p>
            </div>
            <div className="info2">
              {/* Insérez ici le contenu de la deuxième info */}
              <p>Info 2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
