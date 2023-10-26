import React from 'react';
import Background from '../assets/annie-spratt-wuc-KEIBrdE-unsplash.jpg';
import MessagePost from '../components/MessagePost';

export default function MessageBoard() {
  return (
    <div className='flex col-auto bg-cover bg-center w-screen h-screen ml-44 overflow-y-auto overflow-x-hidden'
    style={{ backgroundImage: `url(${ Background })`}}>
      <MessagePost/>
    </div>
  );
}
