import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { server_calls } from '../api/server';
import { chooseMessages } from '../redux/silces/MessageSlice';

const MessagePost = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.post.messages);
  

  useEffect(() => {
    server_calls.get().then((data) => {
      if (data && Array.isArray(data)) {
        
        const messageArray = data.map(item => item.message);
        console.log(messageArray)
       
        dispatch(chooseMessages(messageArray));
      }
    });
  }, [dispatch]);

  return (
    <div className="message-post">
      <h2>Message Posts</h2>
      {Array.isArray(messages) && messages.length > 0 ? (
        messages.map((msg, index) => (
          <div key={index} className="message">
            <p>{msg}</p>
          </div>
        ))
      ) : (
        <p>No messages available.</p>
      )}
    </div>
  );
};

export default MessagePost;
