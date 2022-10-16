import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase.config';
import {
   createUserWithEmailAndPassword,
   getAuth,
   GoogleAuthProvider,
   onAuthStateChanged,
   signInWithEmailAndPassword,
   signInWithPopup,
   signOut,
   updateProfile,
} from 'firebase/auth';
export const AuthContext = createContext();

const auth = getAuth(app);
const UserContext = ({ children }) => {
   const [user, setUser] = useState({});
   const [loading, setLoading] = useState(true);
   const provider = new GoogleAuthProvider();

   const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
   };
   const signInWithGoogle = () => {
      return signInWithPopup(auth, provider);
   };
   const createName = (name) => {
      return updateProfile(auth.currentUser, {
         displayName: name,
      });
   };
   const signIn = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
   };
   const logOut = () => {
      return signOut(auth);
   };

   const authInfo = { user, createUser, signIn, logOut, createName, signInWithGoogle, loading };

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);
         setLoading(false);
         console.log('current user', currentUser);
      });
      return () => {
         unsubscribe();
      };
   }, []);

   return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default UserContext;
