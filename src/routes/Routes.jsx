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
            loader: ({params})=>fetch(`http://localhost:5000/food/${params.id}`)
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
            element: <Profile></Profile>
        },
        {
            path: '/availableFoods',
            element: <AvailableFoods></AvailableFoods>
        },
        {
            path: '/addFood',
            element: <AddFood></AddFood>
        },
        {
            path: '/manageMyFoods',
            element: <ManageMyFoods></ManageMyFoods>
        },
        {
            path: '/myFoodRequest',
            element: <MyFoodRequest></MyFoodRequest>
        },
        {
            path: '/update/:id',
            element: <UpdateFood></UpdateFood>,
            loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/food/${params.id}`)
        },
      ]
    },
  ]);
export default router;