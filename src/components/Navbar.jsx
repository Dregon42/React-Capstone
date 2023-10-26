import React, { useState } from 'react';


export default function NavBar() {
  const [authenticated, setAuthenticated] = useState(false);

  // Not working as planned; used tenary operator but didn't work
  const handleLogin = () => {
    setAuthenticated(true);
  };

  const handleLogout = () => {
    setAuthenticated(false)
  };

  return (
    <nav className='fixed flex h-screen font-Tangerie font-bold box-shadow min-h-screen'>
        <div className='bg-red-900 shadow-xl bg-blend-soft-light pl-11 p-5 pt-8 w-72'>
            <div className="">
              <a href="/" className='flex'>
                <div className='bg-gold rounded-full flex justify-center align-middle p-3 pb-20 pl-8 h-9 float-left cursor-pointer mr-2 duration-300' style={{ width: '100px', height: '100px' }}>
                    <h1 className='text-bleach_almond font-bold text-7xl flex align-middle text-shadow-lg shadow-black'>
                        One Moore Brantley
                    </h1>
                </div>
              </a>
            </div>
            <ul className="pt-44">
                <li className='text-gold text-5xl flex items-center gap-x-4 cursor-pointer p-2 bg-navy_blue hover:bg-bleach_almond rounded-md mt-2 transition ease-in-out shadow-2xl shadow-black hover:-translate-y-1 hover:scale-110 duration-300 hover:drop-shadow-2xl'> 
                    <a href="/about">
                        <span className='font-medium flex-1 hover:ease-in hover:duration-500 text-shadow-sm shadow-black'>
                            About Us
                        </span>
                    </a>
                </li>
                <li className='text-gold text-5xl flex items-center gap-x-4 cursor-pointer p-2 bg-navy_blue hover:bg-bleach_almond rounded-md mt-10 transition ease-in-out shadow-2xl shadow-black hover:-translate-y-1 hover:scale-110 duration-300 hover:drop-shadow-2xl'>
                    <a href='/message_board'>
                        <span className='font-medium flex-1 hover:ease-in hover:duration-500 text-shadow-sm shadow-black'>
                            Message
                        </span>
                    </a>
                </li>
              {/* TODO: add javavscript if !authenticated show signup or signin else logout  */}
              {
                authenticated &&
                <li className='text-gold text-sm flex items-center gap-x-4 cursor-pointer 
                  p-2 hover:bg-light-white rounded-md mt-2'>
                  <a onClick={ () => {handleLogout()}}>
                    <i className='fas fa-sign-out-alt block float-left text-2xl mr-2'></i>
                    <span className='text-base font-medium flex-1'>
                      {/* <LogoutButton /> */}
                    </span>
                  </a>
                </li>
              }
            </ul>
        </div>
    </nav>
  )
}
