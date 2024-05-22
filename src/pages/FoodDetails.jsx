import { useLoaderData, useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast"

const FoodDetails = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    const navigate = useNavigate()
    useEffect(() => {
        const timerId = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);

        return () => clearInterval(timerId);
    }, []);
    const { user } = useAuth()
    const food = useLoaderData()
    const { _id, foodName, foodImage, foodQuantity,
        pickupLocation, expiredDate,
        additionalNotes, donator
    } = food

    const handleFormSubmit =async e => {
        e.preventDefault()
        const form = e.target;
        const foodName = form.foodName.value;
        const foodId = form.foodId.value;
        const foodImage = form.foodImage.value;
        const donatorName = form.donatorName.value;
        const donatorEmail = form.donatorEmail.value;
        const userEmail = form.userEmail.value;
        const requestDate = form.requestDate.value;
        const pickupLocation = form.pickupLocation.value;
        const expiredDate = form.expiredDate.value;
        const additionalNotes = form.additionalNotes.value;
        const foodStatus = 'Requested'
        const modalData = {
            foodName, foodId, foodImage, donatorName,
            donatorEmail, userEmail, requestDate, pickupLocation,
            expiredDate, additionalNotes, foodStatus
        }
        console.log(modalData)
        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/requestedFood`, modalData)
            if (data.insertedId) {
                toast.success('Food Item Successfully is in Requested')
                const data= axios.delete(`${import.meta.env.VITE_API_URL}/food/${_id}`)
                if(data.deletedCount>0){
                    toast.success('Delete Successful')
                }
                navigate('/myFoodRequest')
            }
        } catch (err) {
            if (err) { toast.error('Not Successful') }
        }
    }

    return (
        <div>
            <header className="bg-[#f5f0f5cc] rounded-xl dark:bg-gray-900">

                <div className="container px-6 py-16 mx-auto">
                    <div className="items-center lg:flex">
                        <div className="w-full lg:w-1/2">
                            <div className="lg:max-w-lg">
                                <h1 className="text-3xl font-semibold  text-blue-500 dark:text-white lg:text-4xl">{foodName}</h1>
                                <div className="flex items-center justify-between">
                                    <p className="mt-4 text-gray-600 dark:text-gray-400"><span className="text-lg font-semibold">Expired Date: </span>{new Date(expiredDate).toLocaleDateString()}</p>
                                    <p className="bg-[#f3c2f3cc] mr-40 w-fit px-4 rounded-2xl text-xl font-bold">{foodQuantity}</p>
                                </div>
                                <div className="mt-3">
                                    <p><span className="text-gray-600 font-semibold">Donator Name:</span> {donator.name}</p>
                                    <p>Pickup Location{pickupLocation}</p>
                                </div>
                                <div className="mt-4">
                                    {/* The button to open modal */}
                                    <label htmlFor="my_modal_6" className="btn px-4 btn-sm  bg-blue-600 text-white">Request</label>
                                    <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                                    <div className="modal" role="dialog">
                                        <div className="modal-box">
                                            <div>
                                                <form onSubmit={handleFormSubmit}>
                                                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                                        <div>
                                                            <label className="text-gray-700 dark:text-gray-200 font-semibold">Food Name</label>
                                                            <input name="foodName" defaultValue={foodName} readOnly type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                                        </div>
                                                        <div>
                                                            <label className="text-gray-700 dark:text-gray-200 font-semibold">Food ID</label>
                                                            <input name="foodId" defaultValue={_id} readOnly type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                                        </div>

                                                        <div>
                                                            <label className="text-gray-700 dark:text-gray-200 font-semibold">Food Image</label>
                                                            <input name="foodImage" defaultValue={foodImage} readOnly type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                                        </div>
                                                        <div>
                                                            <label className="text-gray-700 dark:text-gray-200 font-semibold">Donator Name</label>
                                                            <input name="donatorName" defaultValue={donator.name} readOnly type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                                        </div>
                                                        <div>
                                                            <label className="text-gray-700 dark:text-gray-200 font-semibold">Donator Email</label>
                                                            <input name="donatorEmail" defaultValue={donator.email} readOnly type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                                        </div>
                                                        <div>
                                                            <label className="text-gray-700 dark:text-gray-200 font-semibold">User Email</label>
                                                            <input name="userEmail" defaultValue={user?.email} readOnly type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                                        </div>

                                                        <div>
                                                            <label className="text-gray-700 dark:text-gray-200 font-semibold">Request Date <small>(Current)</small></label>
                                                            <input name="requestDate" readOnly defaultValue={currentDateTime.toLocaleString()} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                                        </div>

                                                        <div>
                                                            <label className="text-gray-700 dark:text-gray-200 font-semibold">Pickup Location</label>
                                                            <input name="pickupLocation" defaultValue={pickupLocation} readOnly type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                                        </div>
                                                        <div className='flex flex-col gap-2 '>
                                                            <label className='text-gray-700 font-semibold'>Expired Date</label>

                                                            <input name="expiredDate" defaultValue={new Date(expiredDate).toDateString()} readOnly type="text" className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                                        </div>

                                                        <div>
                                                            <label className="text-gray-700 dark:text-gray-200 font-semibold">Additional Notes</label>
                                                            <input name="additionalNotes" defaultValue={additionalNotes} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                                        </div>
                                                    </div>
                                                    <div className="text-end">
                                                        <button className="btn px-4 btn-sm  bg-blue-600 text-white mt-4">Request</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                            <img className="w-full h-full lg:max-w-3xl" src={foodImage} alt="Catalogue-pana.svg" />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default FoodDetails;