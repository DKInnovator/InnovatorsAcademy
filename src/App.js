
import './App.css';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Home from './Pages/Home';
import Courses from './Pages/Courses';
import Career from './Pages/Career';
import Aboutus from './Pages/Aboutus';
import Contactus from './Pages/Contactus';
import Root from './Pages/root';
function App() {
  const router = createBrowserRouter([
    {
        path :"/",
        element: <Root />,
        children: [
          {
            index: true,
            element: <Home />,
            
          },
          {
            path: "/Courses/:id",
            element: <Courses />,
           
          },
          {
            path: "/Career",
            element: <Career />,
           
          },
          {
            path: "/Aboutus",
            element: <Aboutus />,
           
          },
          {
            path: "/Contactus",
            element: <Contactus/>,
           
          },

        ],

    },
   
  ]);

  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
