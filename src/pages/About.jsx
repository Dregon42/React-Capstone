import React from 'react';
import SpotifyPlayer from '../components/SpotifyPlayer';
import Background from '../assets/jeremy-wong-weddings-K41SGnGKxVk-unsplash.jpg';

export default function About() {
  return (
    <div className='h-screen w-screen ml-44 flex flex-col font-Tangerie bg-cover bg-center text-white overflow-y-auto overflow-x-hidden'
    style={{ backgroundImage: `url(${ Background })`}}>
        <div className='w-full text-center m-10 px-20'>
            <p className='text-7xl text-gold font-semibold text-shadow-lg shadow-black'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero asperiores, eveniet commodi distinctio et enim,
                laborum maiores nobis tempora, soluta illo ipsum molestiae voluptate esse. Culpa molestias doloribus sed aliquid
                quasi quidem corporis libero placeat porro maiores voluptate inventore officiis, in, repellat nisi facere, cupiditate
                magni asperiores? Nesciunt, optio autem!
            </p>
        </div>
        <div className='row'>
            <SpotifyPlayer />
        </div>
    </div>
  );
}
