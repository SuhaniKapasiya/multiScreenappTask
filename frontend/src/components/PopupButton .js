import React, { useState } from "react";

const PopupButton = ({ buttonText, popupContent }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        onClick={togglePopup}
        className="bg-blue-500 text-white px-4 py-2 mt-40 rounded hover:bg-blue-600"
      >
        {buttonText}
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4">Popup</h2>
            <div>{popupContent}</div>
            <button
              onClick={togglePopup}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupButton;
