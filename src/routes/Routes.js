import Orders from '../components/Orders';
import PrivateRoutes from './PrivateRoutes';

const { createBrowserRouter } = require('react-router-dom');
const { default: Home } = require('../components/Home');
const { default: Login } = require('../components/Login');
const { default: Register } = require('../components/Register');
const { default: Root } = require('../components/Root');

export const router = createBrowserRouter([
   {
      path: '/',
      element: <Root></Root>,
      children: [
         { path: '/', element: <Home></Home> },
         {
            path: '/home',
            element: (
               <PrivateRoutes>
                  <Home></Home>
               </PrivateRoutes>
            ),
         },
         { path: '/login', element: <Login></Login> },
         { path: '/register', element: <Register></Register> },
         {
            path: '/order',
            element: (
               <PrivateRoutes>
                  <Orders></Orders>
               </PrivateRoutes>
            ),
         },
      ],
   },
]);
