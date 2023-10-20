
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const Banners = () => {
    return (
        <div className="carousel w-full" >

            {/* slider 1 */}
            
                <div className="hero md:h-[700px] h-[400px]   " style={{ backgroundImage: 'url(https://i.postimg.cc/YCz9GF2T/1st-car.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    
                        <div className="hero-content text-center relative overflow-hidden" >
                            <div>
                                <h1 className="mb-5 text-2xl md:text-5xl font-extrabold hover:text-green-400 text-sky-300  ">Driving Innovation
                                <br /> into the Future</h1>
                                <p className="mb-5 w-1/2 mx-auto text-pink-100">Explore our range of electric and hybrid vehicles, and  the automotive revolution.</p>

                            </div>
                        </div>
                    
                </div>
                
           

           
        </div>
    );
};

export default Banners;