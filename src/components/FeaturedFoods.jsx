import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FeaturesFoodsCard from "./FeaturesFoodsCard";

const FeaturedFoods = () => {
    const [foods, setFoods] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/foods')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])
    return (
        <div>
            <h1 className="mb-10 text-4xl font-bold text-center">Featured Foods</h1>
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