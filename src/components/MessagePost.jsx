import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { server_calls } from '../api/server';
import { chooseMessages } from '../redux/silces/MessageSlice';
import Placard from '../assets/gold-background.jpg'

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
    <div className="m-20 ml-96 font-Parisienne" id='message-post'>
      <h2 className='text-4xl font-bold mb-4 text-ellipsis text-white text-shadow-sm shadow-navy_blue'>Cheers to the Happy Couple!!</h2>
      {Array.isArray(messages) && messages.length > 0 ? (
        messages.map((msg, index) => (
          <div key={index} className="p-4 mb-4 rounded-lg shadow-md bg-bleach_almond w-3/5">
            <p className='text-4xl font-Parisienne w-auto text-shadow shadow-navy_blue'>{msg}</p>
          </div>
        ))
      ) : (
        <p>No messages available.</p>
      )}
    </div>
  );
};

export default MessagePost;
