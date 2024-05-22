import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
const Banner = () => {
    return (
        <div className="text-center">
            <Carousel className="mx-auto">
                <div>
                    <img src="https://i.postimg.cc/yY7zMcqs/1.avif" />
                </div>
                <div>
                    <img src="https://i.postimg.cc/VL4cmv1M/2.avif" />
                </div>
                <div>
                    <img src="https://i.postimg.cc/520W0JNr/5.avif" />
                </div>
                <div>
                    <img src="https://i.postimg.cc/FHB5k6YH/6.webp" />
                </div>
                <div>
                    <img src="https://i.postimg.cc/XvRRQycM/7.jpg" />
                </div>
                <div>
                    <img src="https://i.postimg.cc/bJ1KMN3Z/9.avif" />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;