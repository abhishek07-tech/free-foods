import React from "react";
import ReactDOM from "react-dom/client";
// import by Default Method
import Header from "./components/Header";
//Import by Named MEthod
// import { Title } from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About  from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter , RouterProvider , Outlet} from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";



const AppLayOut = () => {
  return (
    <>
      <Header />
      
       { }
       <Outlet/>
      
      <Footer />
      
    </>
  );
};

const appRouter = createBrowserRouter ([
  {
    path: "/",
    element : <AppLayOut/>,
    errorElement : <Error/>,
     children:[
      {
        path: "/about",
        element :<About/>
      },
      {
        path: "/Contact",
        element :<Contact/>
      },
      {
        path: "/",
        element :<Body/>
      },
      {
        path :"/restaurant/:resId",
        element:<RestaurantMenu/>

      },
     ]
  },


]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router= {appRouter}/>);
