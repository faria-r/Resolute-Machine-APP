import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Dashboard from "../Pages/Dashboard/Dashboard";
import UserForm from "../Pages/UserForm/UserForm";
import Machines from "../Pages/Machines/Machines";
import UserMachines from "../Pages/UserMachines/UserMachines";
import Users from "../Pages/Users/Users";
import AdminRoute from "./AdminRoute";
import AddMachine from "../Pages/AddMachine/AddMachine";

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
            element:<AdminRoute><Machines></Machines></AdminRoute>
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
            path:'/dashboard/addMachine',
            element:<AddMachine></AddMachine>
        },
        {
            path:'/dashboard/myMachines',
            element:<UserMachines></UserMachines>
        }
       
    ]
},

])