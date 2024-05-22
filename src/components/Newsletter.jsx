import { TfiEmail } from "react-icons/tfi";

const Newsletter = () => {
    return (
        <div className="flex p-20 justify-center gap-x-8 items-center">
            <div>
                <h1 className="text-4xl font-bold">Newsletter</h1>
                <p className="text-lg font-medium text-gray-500">Sign Up to receive the best offers</p>
            </div>
            <div>
                <div className="join">
                    <button className="btn join-item px-8 text-xl h-16"><TfiEmail></TfiEmail></button>
                    <input className="input input-bordered join-item h-16" placeholder="Email" />
                    <button className="btn join-item bg-[#f79520] h-16 text-lg text-[#FFF] font-semibold">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;