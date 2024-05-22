import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Main = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <NavBar></NavBar>
            <div className="min-h-[calc(100vh-200px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;