import React from 'react';
import Background from '../assets/stephen-frank-1nls6y6XZJ4-unsplash.jpg';
import Itinerary from '../components/Itinerary';
import Profile from '../auth0/Profile';
import { useAuth0 } from '@auth0/auth0-react';


export default function Home() {
  const { isAuthenticated } = useAuth0();

  return (
    <>
        <div className='bg-cover bg-center w-screen h-screen ml-44 flex justify-center p-20 shadow-inner'
          style={{ backgroundImage: `url(${Background})` }}>
            <div className='w-3/4'>
              { isAuthenticated && <Itinerary /> }
                
            </div>
            <Profile />
        </div>

        
    </>
  );
}
