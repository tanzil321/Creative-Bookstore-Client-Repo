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
import Payment from "../../Pages/Dashboard/Payment/Payment";
import Home from "../../Pages/Home/Home/Home"
import Login from "../../Pages/Login/Login";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

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
                element:<PrivateRoutes><Catagories></Catagories></PrivateRoutes>,
                loader:({params}) => fetch(`https://creative-bookstore-server.vercel.app/catagory/${params.id}`)
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
           {
            path: '/dashboard/payment/:id',
            element: <Payment></Payment>,
            loader:({params}) => fetch(`https://creative-bookstore-server.vercel.app/bookOptions/${params.id}`)
        },
        ]
    }
])
export default router;