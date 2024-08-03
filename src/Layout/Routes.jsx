import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Components/Home/Home";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Layout from "./Layout";
import About from "../Components/About/About";
import AllBooks from "../Components/All Books/AllBooks";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout> ,
        errorElement: <ErrorPage></ErrorPage> ,
        children: [
            {
                path: "/",
                element: <Home></Home> ,
            },
            {
                path: "/about",
                element: <About></About> ,
            },
            {
                path: "/allbooks",
                element: <AllBooks></AllBooks> ,
            },
           
        ],
    },
]);

export default router