import { RotatingLines } from "react-loader-spinner";

const Spinner = () => {
    return (
        <div className="flex items-center justify-center mt-72">
            <RotatingLines
                visible={true}
                height="96"
                width="96"
                color="grey"
                strokeWidth="5"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    );
};

export default Spinner;