import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const UpdateFood = () => {
    const navigate = useNavigate()
    const [startDate, setStartDate] = useState(new Date());
    const food = useLoaderData()
    const { _id, foodName, foodImage, foodQuantity,
        pickupLocation,additionalNotes
    } = food || {}


    const handleFormSubmit = async e =>{
        e.preventDefault()
        const form = e.target;
        const foodName = form.foodName.value;
        const foodImage = form.foodImage.value;
        const foodQuantity = parseInt(form.foodQuantity.value);
        const pickupLocation = form.pickupLocation.value;
        const expiredDate = startDate
        const additionalNotes = form.additionalNotes.value
        const foodData = {
            foodName,foodImage,foodQuantity,
            pickupLocation,expiredDate,additionalNotes
        }
        try{
            const {data} = await axios.put(`${import.meta.env.VITE_API_URL}/food/${_id}`,foodData)
            console.log(data);
            toast.success('Job Data Updated Successfully')
            navigate('/manageMyFoods')
        }catch(err){
            if(err.message){
                toast.error('Not Success')
            }
        }
    }
    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12'>
            <section className=' p-2 md:p-6 mx-auto bg-white rounded-md shadow-md '>
                <h2 className='text-2xl text-center mb-10 font-semibold text-[#f18807] capitalize '>
                    Update a Food
                </h2>

                <form onSubmit={handleFormSubmit}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-gray-700 dark:text-gray-200 font-semibold">Food Name</label>
                            <input name="foodName" defaultValue={foodName} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200 font-semibold">Food Image</label>
                            <input name="foodImage" defaultValue={foodImage} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200 font-semibold">Food Quantity</label>
                            <input name="foodQuantity" defaultValue={foodQuantity} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200 font-semibold">Pickup Location</label>
                            <input name="pickupLocation" defaultValue={pickupLocation} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div className='flex flex-col gap-2 '>
                            <label className='text-gray-700 font-semibold'>Expired Date</label>

                            <DatePicker
                                className='block w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200 font-semibold">Additional Notes</label>
                            <input name="additionalNotes" defaultValue={additionalNotes} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                    </div>
                    <button className="mt-6 w-full px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-[#df9b26] rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Update Food</button>
                </form>
            </section>
        </div>
    );
};

export default UpdateFood;