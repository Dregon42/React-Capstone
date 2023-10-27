import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <div className='text-gold text-5xl flex items-center gap-x-4 cursor-pointer p-2 bg-navy_blue hover:bg-bleach_almond rounded-md mt-10 transition ease-in-out shadow-2xl shadow-black hover:-translate-y-1 hover:scale-110 duration-300 hover:drop-shadow-2xl'>
        <a href='/message_board'>
            <span className='font-medium flex-1 hover:ease-in hover:duration-500 text-shadow-sm shadow-black m-5'>
                <button className="text-shadow-sm shadow-black" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}> {/* The Logout button will take you back to the homescreen */}
                    Log Out
                </button>
            </span>
        </a>
    </div>
    
  );
};

export default LogoutButton;