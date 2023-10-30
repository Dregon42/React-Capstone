import LoginButton from '../auth0/LoginButton';
import LogoutButton from '../auth0/LogoutButton';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';


export default function NavBar() {
  const { isAuthenticated } = useAuth0();

  return (
    <nav className='fixed flex h-screen font-Tangerie font-bold box-shadow min-h-screen'>
        <div className='bg-red-900 shadowRight-DEFAULT shadow-black bg-blend-soft-light pl-11 p-5 pt-8 w-72'>
            <div className="">
              <Link to="/" className='flex'>
                <div className='bg-gold rounded-full flex justify-center align-middle p-3 pb-20 pl-8 h-9 float-left cursor-pointer mr-2 duration-300' style={{ width: '100px', height: '100px' }}>
                    <h1 className='text-bleach_almond font-bold text-7xl flex align-middle text-shadow shadow-black'>
                        One Moore Brantley
                    </h1>
                </div>
              </Link>
            </div>
            <ul className="pt-44">
              {isAuthenticated && (
                <>
                <li className='text-gold text-5xl flex items-center gap-x-4 cursor-pointer p-2 bg-navy_blue hover:bg-bleach_almond rounded-md mt-2 transition ease-in-out shadow-2xl shadow-black hover:-translate-y-1 hover:scale-110 duration-300 hover:drop-shadow-2xl'>
                  <Link to="/about">
                    <span className='font-medium flex-1 hover:ease-in hover:duration-500 text-shadow-sm shadow-black m-5'>
                      About Us
                    </span>
                  </Link>
                </li>
                <li  className='text-gold text-5xl flex items-center gap-x-4 cursor-pointer p-2 bg-navy_blue hover:bg-bleach_almond rounded-md mt-10 transition ease-in-out shadow-2xl shadow-black hover:-translate-y-1 hover:scale-110 duration-300 hover:drop-shadow-2xl'>
                  <Link to='/message_board'>
                    <span className='font-medium flex-1 hover:ease-in hover:duration-500 text-shadow-sm shadow-black m-5'>
                      Message
                    </span>
                  </Link>
                </li>
                </>
              )}
              
              
              {isAuthenticated ? (
                <LogoutButton />
              ) : (
                <LoginButton />
              )}
            </ul>
        </div>
    </nav>
  )
}
