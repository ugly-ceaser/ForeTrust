// Modal.js
import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const Modal = ({ imageSrc, content, onClose, title }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="relative bg-white p-6 rounded-lg max-w-md w-full shadow-lg">
        <button 
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800" 
          onClick={onClose}
        >
          <AiOutlineClose size={24} />
        </button>
        <h1 className='text-3xl text-teal-700'>{title}</h1>
        <img src={imageSrc} alt="Service" className="w-full h-48 mt-4 object-cover rounded-md mb-4" />
        <p className="text-gray-700">{content}</p>
      </div>
    </div>
  );
};

export default Modal;
