import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { server_calls } from '../api/server';
import { chooseMessages } from '../redux/silces/MessageSlice';
import Placard from '../assets/gold-background.jpg';
import EditMessageModal from './EditModal';
import { chooseMessage } from '../redux/silces/RsvpSlice';

const MessagePost = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.post.messages);
  const [rsvpData, setRsvpData] = useState([]); 
  const [selectedMessage, setSelectedMessage] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  console.log(rsvpData)
  console.log(messages)

  useEffect(() => {
    // Fetch all RSVP data and store it in rsvpData state
    server_calls.get().then((data) => {
      if (data && Array.isArray(data)) {
        setRsvpData(data);
        const messageArray = data.map((item) => item.message);
        dispatch(chooseMessages(messageArray));
      }
    });
  }, [dispatch]);

  const handleSelectMessage = (message) => {
    setSelectedMessage(message);
    setIsEditing(true);
  };

  const handleUpdateMessage = async (updatedMessage) => {
    console.log(updatedMessage)
    // Find the RSVP associated with the original message
    const rsvpToUpdate = rsvpData.find((rsvp) => rsvp.message === selectedMessage);
    console.log(rsvpToUpdate)

    if (rsvpToUpdate) {
      // Extract the RSVP's ID
      const rsvpId = rsvpToUpdate.id;
      console.log(rsvpId)

      try {
        // Update the message on the server
        await server_calls.update(rsvpId, { message: updatedMessage });

        // Update the local state in your Redux store
        const updatedMessages = messages.map((msg) =>
          msg === selectedMessage ? updatedMessage : msg
        );

        dispatch(chooseMessages(updatedMessages));
        dispatch(chooseMessage(updatedMessage))
        setIsEditing(false);
      } catch (error) {
        console.error('Failed to update the message on the server:', error);
      }
    } else {
      console.error('Could not find RSVP associated with the selected message.');
    }
  };

  const handleDeleteMessage = async () => {
    const rsvpToDelete = rsvpData.find((rsvp) => rsvp.message === selectedMessage);

    if (rsvpToDelete) {
      const rsvpId = rsvpToDelete.id;

      try {
        await server_calls.delete(rsvpId);
        const updatedMessages = messages.filter((msg) => msg !== selectedMessage);

        dispatch(chooseMessages(updatedMessages));
        setSelectedMessage(''); 
      } catch (error) {
        console.error('Failed to delete the message on the server:', error);
      }
    } else {
      console.error('Could not find RSVP associated with the selected message.');
    }
  };


  const handleCancelEdit = () => {
    setSelectedMessage(null);
    setIsEditing(false);
  };

  return (
    <div className="m-20 ml-96 font-Parisienne" id="message-post">
      <h2 className="text-4xl font-bold mb-4 text-ellipsis text-bleach_almond text-shadow-sm shadow-navy_blue">
        Cheers to the Happy Couple!!
      </h2>
      {Array.isArray(messages) && messages.length > 0 ? (
        messages.map((msg, index) => (
          <div
            key={index}
            className="p-4 mb-7 rounded-lg shadow-md bg-bleach_almond w-3/5"
            style={{ backgroundImage: `url(${Placard})` }}
            onClick={() => handleSelectMessage(msg)} // Handle message selection
          >
            <p className="text-4xl font-Parisienne w-auto text-shadow shadow-navy_blue">
              {msg}
            </p>
          </div>
        ))
      ) : (
        <p>No messages available.</p>
      )}
      <EditMessageModal
        isEditing={isEditing}
        selectedMessage={selectedMessage}
        handleUpdateMessage={handleUpdateMessage}
        handleCancelEdit={handleCancelEdit}
        handleDeleteMessage={handleDeleteMessage}
      />
    </div>
  );
};

export default MessagePost;
