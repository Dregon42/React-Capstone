import React, { useState } from 'react';


export default function NavBar() {
  const [open, setOpen] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  // Not working as planned; used tenary operator but didn't work
  const handleLogin = () => {
    setAuthenticated(true);
  };

  const handleLogout = () => {
    setAuthenticated(false)
  };

  return (
    <nav className='flex h-screen font-Tangerie font-bold'>
        <div className={`bg-red-950  p-5 pt-8
        ${open ? 'w-72' : 'w-20'} duration-300 relative`}>
            <i className={`fa-solid fa-arrow-left bg-white text-yellow-400
            text-xl rounded-full p-2 absolute -right-3 top-9 border border-red-950 cursor-pointer ${!open && 'rotate-180'}`}
            onClick={() => setOpen(!open)}></i>
            <div className="">
              <a href="/" className='flex'>
                <div className='bg-yellow-500 rounded-full flex justify-center align-middle p-3 pb-20 pl-8 h-9 float-left cursor-pointer mr-2 duration-300' style={{ width: '100px', height: '100px' }}>
                    <h1 className={`text-white font-bold text-6xl flex align-middle ${!open && 'scale-0'}`}>
                        One Moore Brantley
                    </h1>
                </div>
              </a>
            </div>
            <ul className="pt-20">
                <li className={`text-yellow-400 text-5xl flex justify-center gap-x-4 cursor-pointer p-2 hover-bg-light-white rounded-md mt-2`}>
                    <a href="/about">
                        <span className={`font-medium flex-1 ${!open && 'hidden'}`}>
                            About Us
                        </span>
                    </a>
                </li>
                <li className='text-yellow-400 text-5xl flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2'>
                    <a href='/message_board'>
                        <span className={`font-medium flex-1 ${!open && 'hidden'}`}>
                            Message
                        </span>
                    </a>
                </li>
              {/* TODO: add javavscript if !authenticated show signup or signin else logout  */}
              {
                authenticated &&
                <li className='text-yellow-400 text-sm flex items-center gap-x-4 cursor-pointer 
                  p-2 hover:bg-light-white rounded-md mt-2'>
                  <a onClick={ () => {handleLogout()}}>
                    <i className='fas fa-sign-out-alt block float-left text-2xl mr-2'></i>
                    <span className={`text-base font-medium flex-1 ${!open && 'hidden'}`}>
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
