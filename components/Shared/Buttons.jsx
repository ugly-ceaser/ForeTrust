import React from 'react'
import btn from '@/components/Shared/css/btn.module.css'
import { useState } from 'react';
import Modal from '@/components/aboutpage/properties/Modal';

const Buttons = ({ imageSrc, content, buttonText, title }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <button 
                className={`${btn.btn} hover:bg-red-900 mt-4 px-4 py-2 bg-teal-600 text-white rounded-md`}
                onClick={openModal}
            >
                {buttonText}
            </button>
            {isModalOpen && (
                <Modal 
                    title={title}
                    imageSrc={imageSrc} 
                    content={content} 
                    onClose={closeModal}
                />
            )}
        </>
    );
}

export default Buttons;