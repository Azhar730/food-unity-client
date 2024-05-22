import Banner from "../components/Banner";
import Featured from "../components/Featured";
import FeaturedFoods from "../components/FeaturedFoods";
import Newsletter from "../components/Newsletter";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedFoods></FeaturedFoods>
            <Featured></Featured>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;