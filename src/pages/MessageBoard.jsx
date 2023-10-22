import React from 'react';
import Background from '../assets/stephen-frank-1nls6y6XZJ4-unsplash.jpg';
import MessagePost from '../components/MessagePost';

export default function MessageBoard() {
  return (
    <div className='flex col-auto bg-cover bg-center w-full'
    style={{ backgroundImage: `url(${ Background })`}}>
      <MessagePost/>
    </div>
  );
}
