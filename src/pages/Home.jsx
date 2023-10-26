import React from 'react';
import Background from '../assets/stephen-frank-1nls6y6XZJ4-unsplash.jpg';
import Itinerary from '../components/Itinerary';


export default function Home() {
  return (
    <>
        <div className='bg-cover bg-center w-screen h-screen ml-44 flex justify-center p-20 shadow-inner'
          style={{ backgroundImage: `url(${Background})` }}>
            <div className='w-full'>
                <Itinerary />
            </div>
        </div>

        
    </>
  );
}
