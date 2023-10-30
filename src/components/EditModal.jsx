import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';

import { useDispatch } from 'react-redux';
import { updateMessage } from '../redux/silces/MessageSlice';
import { server_calls } from '../api/server';

const EditMessageModal = ({ isEditing, selectedMessage, handleUpdateMessage, handleCancelEdit }) => {
  const [editedMessage, setEditedMessage] = useState(selectedMessage);
  const dispatch = useDispatch();

  const handleSave = () => {
    handleUpdateMessage(editedMessage); // This saves the edited message locally in the component
    server_calls.update(editedMessage)
    // Dispatch the updateMessage action to update the message in the Redux store
    
    dispatch(updateMessage({ updatedMessage: editedMessage }));
  };

  const handleClose = () => {
    handleCancelEdit();
  };

  return (
    <Modal
      open={isEditing}
      onClose={handleClose}
      aria-labelledby="edit-message-modal"
      aria-describedby="edit-message-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}
      >
        <TextareaAutosize
          value={editedMessage ?? ''}
          onChange={(e) => setEditedMessage(e.target.value)}
          style={{ width: '100%', marginBottom: '16px' }}
        />

        <Button variant="contained" onClick={handleSave} style={{ marginRight: '16px' }}>
          Save
        </Button>
        <Button variant="contained" onClick={handleClose}>
          Cancel
        </Button>
      </Box>
    </Modal>
  );
};

export default EditMessageModal;
