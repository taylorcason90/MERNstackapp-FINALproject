import React from 'react';

const Popup = ({ title, children, onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <div className="popup-header">
          <h2>{title}</h2>
          <button className="close-btn" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="popup-body">{children}</div>
      </div>
    </div>
  );
};

export default Popup;
