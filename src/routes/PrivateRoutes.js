import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';

const PrivateRoutes = ({ children }) => {
   const { user, loading } = useContext(AuthContext);
   if (loading) {
      return (
         <div className=" mx-auto mt-32 w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-400"></div>
      );
   }
   if (user && user.email) {
      return children;
   }

   return <Navigate to="/login"></Navigate>;
};

export default PrivateRoutes;
