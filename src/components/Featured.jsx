const Featured = () => {
    return (
        <div className="hero" style={{ backgroundImage: 'url(https://i.postimg.cc/MHc252vT/featured.avif)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="mb-10 hero-content p-20 text-[#ffffff] text-center">
                <div>
                    <section className="flex items-center px-8 bg-opacity-20">
                        <img className="w-[450px] h-[300px]" src="https://i.postimg.cc/MHc252vT/featured.avif" />
                        <div className="px-8">
                            <p className="text-lg font-semibold">March 20, 2024</p>
                            <p className="text-xl font-semibold uppercase">Where can I get Some</p>
                            <p>FoodUnity is a community-driven platform dedicated to reducing food waste and sharing surplus food. As a Full Stack Developer, you ill design, develop, and maintain our innovative platform using React, Firebase, Node.js, and MongoDB. Users can donate and request food, ensuring no meal goes to waste. With features like detailed food listings, secure login, and user-friendly interfaces, ShareNourish fosters a network where generosity meets necessity. Join us in creating a sustainable solution to food waste, connecting communities, and making a positive impact on both people and the environment.</p>
                        </div>
                    </section>
                    <button className="btn btn-outline border-0 mt-4 border-b-4 border-[#f79520] text-lg text-white px-8 ml-20">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;