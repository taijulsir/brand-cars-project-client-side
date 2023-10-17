
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const Banners = () => {
    return (
        <div className="carousel w-full" >

            {/* slider 1 */}
            <div id="slide1" className="carousel-item relative w-full" >
                <div className="hero md:h-[600px] h-[400px]   " style={{ backgroundImage: 'url(https://i.postimg.cc/YCz9GF2T/1st-car.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    
                        <div className="hero-content text-center text-neutral-content" >
                            <div className="max-w-md ">
                                <h1 className="mb-5 text-5xl font-bold text-pink-200 ">Driving Innovation into the Future</h1>
                                <p className="mb-5 text-pink-100">Explore our range of electric and hybrid vehicles, and be part of the sustainable automotive revolution.</p>

                            </div>
                        </div>
                    
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>

            {/* slider 2 */}
            <div id="slide2" className="carousel-item relative w-full">
                <div className="hero md:h-[600px] h-[400px]   " style={{ backgroundImage: 'url(https://i.postimg.cc/qMpWB6YN/2nd-car.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content" >
                        <div className="max-w-md" >
                            <h1 className="mb-5 text-5xl font-bold text-pink-200">Unleash the Power of Performance</h1>
                            <p className="mb-5 text-pink-100">Discover the thrill of driving in our high-performance vehicles with lightning-fast acceleration and precision handling.</p>

                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>

            {/* slider 3 */}
            <div id="slide3" className="carousel-item relative w-full">
                <div className="hero  md:h-[600px] h-[400px]   " style={{ backgroundImage: 'url(https://i.postimg.cc/GhYPfXzY/roollss.webp)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content" >
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold text-pink-200">Iconic Design, Timeless Elegance</h1>
                            <p className="mb-5 text-pink-100">Journey through the artistry of automotive engineering and design that defines our iconic brand.</p>

                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>

            {/* slide 4 */}
            <div id="slide4" className="carousel-item relative w-full">
                <div className="hero  md:h-[600px] h-[400px]  " style={{ backgroundImage: 'url(https://i.postimg.cc/NFxs9qBm/last.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content" >
                        <div className="max-w-md"  >
                            <h1 className="mb-5 text-5xl font-bold text-pink-200">Prioritizing Your Safety on the Roa</h1>
                            <p className="mb-5 text-pink-100">Experience peace of mind with our advanced safety features and technologies, making us a trusted choice.</p>

                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banners;