import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Dashboard from "../Pages/Dashboard/Dashboard";
import UserForm from "../Pages/UserForm/UserForm";
import Machines from "../Pages/Machines/Machines";
import UserMachines from "../Pages/UserMachines/UserMachines";
import Users from "../Pages/Users/Users";

export const router = createBrowserRouter([
    {
    path:'/',
    element:<Login></Login>
},
{
    path:'/dashboard',
    element:<Dashboard></Dashboard>,
    children:[
        {
            path:'/dashboard',
            element:<Machines></Machines>
        },
        {
            path:'/dashboard/users',
            element:<Users></Users>
        },
        {
            path:'/dashboard/addUser',
            element:<UserForm></UserForm>
        },
        {
            path:'/dashboard/myMachines',
            element:<UserMachines></UserMachines>
        }
       
    ]
},

])