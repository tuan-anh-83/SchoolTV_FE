import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/login/login';
import Register from './pages/register/register';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header /> {/* Include the Header component */}
          <Home />   {/* Include the Home component */}
          <Footer /> {/* Include the Footer component */}
        </>
      ),
    },
    {
      path: "/login", 
      element: (
        <>
          <Login />
        </>
      ),
    },
    {
      path: "/register", 
      element: (
        <>
          <Register />
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
