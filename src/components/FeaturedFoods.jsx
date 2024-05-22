import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FeaturesFoodsCard from "./FeaturesFoodsCard";

const FeaturedFoods = () => {
    const [foods, setFoods] = useState([])
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/foods`)
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])
    return (
        <div>
            <div className="px-40 mb-10">
                <h1 className="mb-4 text-4xl font-bold text-center">Featured Foods</h1>
                <p>Our Featured Foods section showcases the top contributions from our generous donors, highlighting the best and most abundant food options available on ShareNourish. Each featured item includes a delicious image, the name of the dish, donor information, serving size, pickup location, expiration date, and detailed notes.</p>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {foods.slice(0, 6).map(food => <FeaturesFoodsCard food={food} key={food._id}></FeaturesFoodsCard>)}
            </div>
            <div className="text-center my-8">
                <Link className="border-none text-lg font-bold btn btn-outline bg-[#e9d5b1] hover:bg-[#dd9613]" to={'/availableFoods'}>Show All</Link>
            </div>
        </div>
    );
};

export default FeaturedFoods;