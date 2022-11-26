import { createBrowserRouter } from "react-router-dom"

import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main"
import About from "../../Pages/About/About";
import Blog from "../../Pages/Blog/Blog";
import Catagories from "../../Pages/Catagories/Catagories";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import AllBuyer from "../../Pages/Dashboard/AllBuyer/AllBuyer";
import AllSellers from "../../Pages/Dashboard/AllSellers/AllSellers";
import AllUser from "../../Pages/Dashboard/AllUser/AllUser";
import MyOrder from "../../Pages/Dashboard/MyOrder/MyOrder";
import MyProduct from "../../Pages/Dashboard/MyProduct/MyProduct";
import Home from "../../Pages/Home/Home/Home"
import Login from "../../Pages/Login/Login";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import SignUp from "../../Pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/catagories/:id',
                element:<Catagories></Catagories>,
                loader:({params}) => fetch(`http://localhost:5000/bookOptions/${params.id}`)
            },
        ]  
    },
    {
        path:'/dashboard',
        element:<DashboardLayout></DashboardLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
           {
            path: '/dashboard',
            element:<MyOrder></MyOrder>
           },
           {
            path: '/dashboard/alluser',
            element:<AllUser></AllUser>
           },
           {
            path: '/dashboard/allbuyer',
            element:<AllBuyer></AllBuyer>
           },
           {
            path: '/dashboard/allseller',
            element:<AllSellers></AllSellers>
           },
           {
            path: '/dashboard/myproduct',
            element:<MyProduct></MyProduct>
           },
           {
            path: '/dashboard/addproduct',
            element:<AddProduct></AddProduct>
           },
        ]
    }
])
export default router;