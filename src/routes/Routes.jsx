import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import AvailableFoods from "../pages/AvailableFoods";
import AddFood from "../pages/AddFood";
import ManageMyFoods from "../pages/ManageMyFoods";
import MyFoodRequest from "../pages/MyFoodRequest";
import FoodDetails from "../pages/FoodDetails";
import UpdateFood from "../pages/UpdateFood";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/food/:id',
            element: <FoodDetails></FoodDetails>,
            loader: ({params})=>fetch(`${import.meta.env.VITE_API_URL}/food/${params.id}`)
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/profile',
            element: <PrivateRoute><Profile></Profile></PrivateRoute>
        },
        {
            path: '/availableFoods',
            element: <AvailableFoods></AvailableFoods>
        },
        {
            path: '/addFood',
            element: <PrivateRoute><AddFood></AddFood></PrivateRoute>
        },
        {
            path: '/manageMyFoods',
            element: <PrivateRoute><ManageMyFoods></ManageMyFoods></PrivateRoute>
        },
        {
            path: '/myFoodRequest',
            element: <PrivateRoute><MyFoodRequest></MyFoodRequest></PrivateRoute>
        },
        {
            path: '/update/:id',
            element: <PrivateRoute><UpdateFood></UpdateFood></PrivateRoute>,
            loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/food/${params.id}`)
        },
      ]
    },
  ]);
export default router;