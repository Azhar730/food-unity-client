import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddFood = () => {
    const navigate = useNavigate()
    const { user } = useAuth()
    const [startDate, setStartDate] = useState(new Date());

    const handleAddFood =async e =>{
        e.preventDefault()
        const form = e.target;
        const foodName = form.foodName.value;
        const foodImage = form.foodImage.value;
        const foodQuantity = parseInt(form.foodQuantity.value);
        const pickupLocation = form.pickupLocation.value;
        const expiredDate = startDate
        const additionalNotes = form.additionalNotes.value
        const foodStatus = 'Available'
        const foodData = {
            foodName,foodImage,foodQuantity,
            pickupLocation,expiredDate,additionalNotes,foodStatus,
            donator: {
                email: user?.email,
                name: user?.displayName,
                photo: user?.photoURL
            }
        }
        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/food`, foodData)
            if (data.insertedId) {
                toast.success('Food Data Successfully Saved in DB')
                navigate('/manageMyFoods')
            }
        } catch (err) {
            if (err) { toast.error('Not Successful') }
        }
        form.reset()
    }

    return (
        <section className="my-10 max-w-4xl p-6 mx-auto bg-[#f4f0e9] rounded-md shadow-md dark:bg-gray-800">
            <div className="text-center">
                <img className="mx-auto rounded-full" src={user?.photoURL} alt="" />
                <h2 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white mb-8"> Hey! <span className="text-blue-600">{user?.displayName}</span> <br /> <span className="text-3xl text-[#7c087ccc]">Add Your Food Here</span></h2>
            </div>

            <form onSubmit={handleAddFood}>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                        <label className="text-gray-700 dark:text-gray-200 font-semibold">Food Name</label>
                        <input name="foodName" required type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                    <div>
                        <label className="text-gray-700 dark:text-gray-200 font-semibold">Food Image</label>
                        <input name="foodImage" required type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                    <div>
                        <label className="text-gray-700 dark:text-gray-200 font-semibold">Food Quantity</label>
                        <input name="foodQuantity" required type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                    <div>
                        <label className="text-gray-700 dark:text-gray-200 font-semibold">Pickup Location</label>
                        <input name="pickupLocation" required type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>
                    <div className='flex flex-col gap-2 '>
                        <label className='text-gray-700 font-semibold'>Expired Date</label>

                        <DatePicker
                            className='block w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>

                    <div>
                        <label className="text-gray-700 dark:text-gray-200 font-semibold">Additional Notes</label>
                        <input name="additionalNotes" required type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>
                </div>
                <button className="mt-6 w-full px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-[#df9b26] rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Add Food</button>
            </form>
        </section>
    );
};

export default AddFood;