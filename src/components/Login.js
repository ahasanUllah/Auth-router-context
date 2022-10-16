import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';

const Login = () => {
   const { signIn } = useContext(AuthContext);
   const navigate = useNavigate();
   const handleSubmit = (event) => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email, password);
      signIn(email, password)
         .then((result) => {
            const user = result.user;
            navigate('/');
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
                  <h1 className="text-5xl font-bold w-1/2 ">Login now!</h1>
                  <p className="py-6 w-1/2 ">
                     Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.
                     In deleniti eaque aut repudiandae et a id nisi.
                  </p>
               </div>
               <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                  <form onSubmit={handleSubmit} className="card-body">
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Email</span>
                        </label>
                        <input type="text" name="email" placeholder="email" className="input input-bordered" required />
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
                           <a href="#" className="label-text-alt link link-hover">
                              Forgot password?
                           </a>
                        </label>
                     </div>
                     <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary">
                           Login
                        </button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;
