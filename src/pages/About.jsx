import React from 'react';
import SpotifyPlayer from '../components/SpotifyPlayer';
import Background from '../assets/stephen-frank-1nls6y6XZJ4-unsplash.jpg';

export default function About() {
  return (
    <div className='flex flex-col p-10 font-Tangerie bg-cover bg-center text-white'
    style={{ backgroundImage: `url(${ Background })`}}>
        <div className='w-full text-center mb-4'>
            <p className='text-3xl'>
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
