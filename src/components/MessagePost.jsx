import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { server_calls } from '../api/server';
import { chooseMessages } from '../redux/silces/MessageSlice';
import Placard from '../assets/gold-background.jpg';
import EditMessageModal from './EditModal'; // Import the modal component

const MessagePost = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.post.messages);
  const [selectedMessage, setSelectedMessage] = useState(''); // Track the selected message
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    server_calls.get().then((data) => {
      if (data && Array.isArray(data)) {
        const messageArray = data.map((item) => item.message);
        dispatch(chooseMessages(messageArray));
      }
    });
  }, [dispatch]);

  // Function to handle message selection
  const handleSelectMessage = (message) => {
    setSelectedMessage(message);
    setIsEditing(true);
  };

  // Function to handle message update
  const handleUpdateMessage = (updatedMessage) => {
    // Update the message on the server (you need to implement this part)
    // After updating on the server, update the Redux store and close the modal
    // Here, we update the local state in this example
    const updatedMessages = messages.map((msg) =>
      msg === selectedMessage ? updatedMessage : msg
    );
    dispatch(chooseMessages(updatedMessages));
    setIsEditing(false);
  };

  // Function to cancel message editing
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
            className="p-4 mb-4 rounded-lg shadow-md bg-bleach_almond w-3/5"
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
      />
    </div>
  );
};

export default MessagePost;
