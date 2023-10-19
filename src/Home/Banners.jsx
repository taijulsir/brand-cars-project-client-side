
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const Banners = () => {
    return (
        <div className="carousel w-full" >

            {/* slider 1 */}
            
                <div className="hero md:h-[600px] h-[400px]   " style={{ backgroundImage: 'url(https://i.postimg.cc/YCz9GF2T/1st-car.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    
                        <div className="hero-content text-center text-neutral-content" >
                            <div className="max-w-md ">
                                <h1 className="mb-5 text-2xl md:text-5xl font-extrabold text-[#aa7608]/90 ">Driving Innovation into the Future</h1>
                                <p className="mb-5 text-pink-100">Explore our range of electric and hybrid vehicles, and be part of the sustainable automotive revolution.</p>

                            </div>
                        </div>
                    
                </div>
                
           

           
        </div>
    );
};

export default Banners;