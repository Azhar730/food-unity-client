import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div>
            <img src="https://i.postimg.cc/Fs41RDqS/404.jpg" />
            <p className="rounded-lg text-[#FFF] font-semibold text-lg mx-auto p-2 bg-[#b75757] border-2 w-fit"><Link to={'/'} className="text-center">Go Home</Link></p>
        </div>
    );
};

export default Error;