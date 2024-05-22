/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const FeaturesFoodsCard = ({ food }) => {
    const { _id, foodName, foodImage, foodQuantity,
        pickupLocation, expiredDate,
        additionalNotes, donator
    } = food
    return (
        <div>
            <div>
                <div className="p-4 mx-auto h-[560px] w-96 overflow-hidden bg-gray-200 rounded-lg shadow-lg dark:bg-gray-800">
                    <img className="object-cover w-full h-56" src={foodImage|| `https://i.postimg.cc/c1cJbRkM/404.png`} alt="avatar" />
                    <div className="py-5">
                        <div className="flex items-center justify-between">
                            <h1 className="block text-xl font-bold text-[#815504] dark:text-white" tabIndex="0" role="link">{foodName}</h1>
                            <p className="bg-[#FCAE1B] px-4 rounded-xl">{foodQuantity}</p>
                        </div>
                        <p className="mt-2 text-gray-700 dark:text-gray-200"><span className="font-medium">Pickup Location:</span> {pickupLocation}</p>
                        <p className="mt-2"><span className="font-semibold">Expired Date:</span> {new Date(expiredDate).toLocaleDateString()}</p>
                        <p className="text-lg font-bold">Description</p>
                        <p title={additionalNotes}>{additionalNotes.substring(1, 70)}...</p>
                        <div className="mt-3 border border-gray-400 border-dashed"></div>
                        <div className="mt-4 flex items-center justify-around">
                            <div>
                                <img className="h-14 w-14 rounded-full" src={donator?.photo} alt="" />
                                <p className="text-[#312309] font-medium">{donator?.name}</p>
                            </div>
                            <Link to={`/food/${_id}`} className="btn btn-sm font-bold bg-[#f5c368] border-none hover:bg-[#e79d15]">View Details</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturesFoodsCard;