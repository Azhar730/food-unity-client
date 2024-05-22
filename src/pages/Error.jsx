import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div>
            <h1 className="text-[500px] text-center">404</h1>
            <p className="rounded-lg text-[#FFF] font-semibold text-lg mx-auto p-2 bg-[#b75757] border-2 w-fit"><Link to={'/'} className="text-center">Go Home</Link></p>
        </div>
    );
};

export default Error;