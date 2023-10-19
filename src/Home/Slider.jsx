import { useLoaderData } from "react-router-dom";


const Slider = () => {
    const brandSlider = useLoaderData()
    console.log(brandSlider)
    const {title,description,image1,image2,image3} = brandSlider
    return (
        <div>
            <div className="carousel w-full">
                
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="hero h-[400px] lg:h-[600px]" style={{ backgroundImage: `url(${image1})` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                                <p className="mb-5">{description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>


                <div id="slide2" className="carousel-item relative w-full">
                <div className="hero h-[400px] lg:h-[600px]" style={{ backgroundImage: `url(${image2})` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                                <p className="mb-5">{description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>



                <div id="slide3" className="carousel-item relative w-full">
                <div className="hero h-[400px] lg:h-[600px]" style={{ backgroundImage: `url(${image3})` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                                <p className="mb-5">{description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;