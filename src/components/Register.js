import { updateCurrentUser, updateProfile } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';

const Register = () => {
   const { createUser, createName, signInWithGoogle } = useContext(AuthContext);
   const handleSubmit = (event) => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email, password);
      createUser(email, password)
         .then((result) => {
            const user = result.user;
            createName(name);
            console.log(user);
         })
         .catch((error) => {
            console.error(error);
         });
   };
   createName()
      .then(() => {
         console.log('name created');
      })
      .catch((error) => {
         console.log(error);
      });
   const handleGoogleSignIn = () => {
      signInWithGoogle()
         .then((result) => {
            const user = result.user;
            console.log(user);
         })
         .catch((error) => {
            console.error(error);
         });
   };
   return (
      <div>
         <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
               <div className="text-center lg:text-left flex justify-center items-center flex-col">
                  <h1 className="text-5xl font-bold w-1/2 ">Register now!</h1>
                  <p className="py-6 w-1/2 ">
                     Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.
                     In deleniti eaque aut repudiandae et a id nisi.
                  </p>
               </div>
               <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                  <form onSubmit={handleSubmit} className="card-body">
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Email</span>
                        </label>
                        <input
                           type="email"
                           name="email"
                           placeholder="email"
                           className="input input-bordered"
                           required
                        />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Password</span>
                        </label>
                        <input
                           type="password"
                           name="password"
                           placeholder="password"
                           className="input input-bordered"
                           required
                        />
                        <label className="label">
                           <Link to="/login" className="label-text-alt link link-hover">
                              Already have an account?
                           </Link>
                        </label>
                     </div>
                     <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary">
                           Register
                        </button>
                     </div>
                  </form>
                  <button onClick={handleGoogleSignIn} className="btn btn-success m-7">
                     Sign in with Google
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Register;
