import React from 'react';
import Invite from '../assets/blue_backdrop.jpg';
import RsvpForm from './RsvpForm';

export default function Itinerary() {
  return (
    <div className='bg-center bg-contain bg-no-repeat w-3/4 ml-44 h-full relative py-10 font-Tangerie text-gold bg-blend-lighten shadow-xl'
    style={{ backgroundImage: `url(${Invite})`}}>

        <div className='absolute inset-0 flex flex-col items-center justify-center pt-20'>
            <h2 className='text-gold text-4xl font-semibold mb-4 text-center'>
                You are cordially invited to <br/> the wedding of:
            </h2>
            <div className='text-gold text-center'>
                <h1 className='text-5xl font-bold'>
                    L'Rae Brantley <br /> & <br /> Karyn Moore
                </h1>
            </div>
            <div className="text-gold text-center pb-10 text-xl">
                <p className='font-bold'>
                    Location:
                    <br />
                    Best Wedding Location
                    <br/>
                    13477 Easy Street, Detroit, MI 48335
                </p>
            </div>
            <div className='pt-20 '>
                <RsvpForm />
            </div>
        </div>
    </div>
  );
};
