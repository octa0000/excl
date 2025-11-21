import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Wishlist from "./pages/Wishlist";
import Cartlist from "./pages/Cartlist";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

const myRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path: "about",
                element: <About/>
            },
            {
                path: "contact",
                element: <Contact/>
            },
            {
            path: "wishlist",
            element: <Wishlist/>
            },
            {
                path: "cartlist",
                element: <Cartlist/>
            },
            {
                path: "signup",
                element: <Signup/>
            },
            {
             path: "login",
             element: <Login/>
            }
          
            
        ]
    }
])

export default myRouter