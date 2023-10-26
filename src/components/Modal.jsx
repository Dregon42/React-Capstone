import React from 'react';
import { Box } from '@mui/material';
import { Modal } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    height: 600,
    maxWidth: '95%',
    maxHeight: '95%',
    bgcolor: 'transparent',
    border: '5px',
    // boxShadow: 24,
    p: 4,
  };

const PictureModal = ({ isOpen, closeModal, imageUrl, imageAlt }) => {
  return (
    // If isOpen true Modal will Open
    isOpen && (
        <Modal
        open={open}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <div className="flex justify-center items-center object-cover" onClick={closeModal}>
                    <div className="flex" onClick={(e) => e.stopPropagation()}>
                        <img src={imageUrl} alt={imageAlt} className="object-cover w-full h-auto" />
                    </div>
                </div>
            </Box>
        </Modal>
    )
  );
};

export default PictureModal;
