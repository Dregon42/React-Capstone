import React, { useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { chooseMessages } from '../redux/silces/MessageSlice';
import { server_calls } from '../api/server';

const MessagePost = () => {
  const dispatch = useDispatch();
  const messages = useStore();

  // Fetch messages from the database when the component mounts
  useEffect(() => {
    server_calls.get().then((data) => {
      if (data) {
        // Update the Redux store with the fetched messages
        dispatch(chooseMessages(data));
      }
    });
  }, [dispatch]);

  return (
    <div className="message-post">
      <h2>Message Posts</h2>
      {Array.isArray(messages) && messages.length > 0 ? (
        messages.map((msg) => (
          <div key={msg.id} className="message">
            <p>{msg.message}</p>
          </div>
        ))
      ) : (
        <p>No messages available.</p>
      )}
    </div>
  );
};

export default MessagePost;
