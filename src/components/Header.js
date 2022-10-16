import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';

const Header = () => {
   const { user, logOut } = useContext(AuthContext);
   console.log(user);
   const handleSignOut = () => {
      logOut();
   };
   return (
      <div className="flex justify-center bg-neutral">
         <div className="navbar  text-neutral-content container flex justify-between">
            <Link to={'/'} className="btn btn-ghost normal-case text-xl">
               Awsome Auth
            </Link>
            <div>
               <Link to={'/home'} className="btn btn-ghost normal-case text-xl">
                  Home
               </Link>
               <Link to={'/order'} className="btn btn-ghost normal-case text-xl">
                  Orders
               </Link>
               <Link to={'/login'} className="btn btn-ghost normal-case text-xl">
                  Login
               </Link>
               <Link to={'/register'} className="btn btn-ghost normal-case text-xl">
                  Register
               </Link>
               {user?.displayName && <span className="px-5"> {user?.displayName}</span>}
               {user?.email ? (
                  <button onClick={handleSignOut} className="btn btn-outline btn-warning">
                     Logout
                  </button>
               ) : (
                  <Link to="/login">
                     <button className="btn btn-outline btn-warning"> Login</button>
                  </Link>
               )}
            </div>
         </div>
      </div>
   );
};

export default Header;
