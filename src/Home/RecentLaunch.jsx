
import './cars.css'
const RecentLaunch = () => {
    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-semibold ">Recent Launched Car</h1>
            <p className="text-sm text-[#403F3F] mb-5 mt-2">Explore the latest car models with detailed specs, pricing, and review.</p>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:px-0 px-3">

           <div className="wrapper bg-gray-400 antialiased text-gray-900">
                <div className='image-container'>

                    <img src="https://i.postimg.cc/nrqQTYDZ/bmw-up.jpg" alt=" random imgee" className="w-full h-[350px] object-cover object-center rounded-lg shadow-md image pulse-grow " />

                    <div className="relative px-4 -mt-16  ">
                        <div className="bg-gradient-to-br from-pink-200 to-pink-100 p-6 rounded-lg shadow-lg">
                            <div className="flex items-baseline">
                                <span className="bg-pink-400  text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                                   BMW
                                </span>
                                <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                                    <a  href="">#RoadWarrior</a>
                                </div>
                            </div>

                            <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">BMW 3 Series</h4>

                            <div className="mt-1">
                            Price: $1800
                                
                            </div>
                            <div className="mt-4">
                                <span className="text-teal-600 text-md font-semibold">4/5 ratings </span>
                                <span className="text-sm text-gray-600">(based on 234 ratings)</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="wrapper bg-gray-400 antialiased text-gray-900">
                <div className='image-container'>

                    <img  src=" https://i.postimg.cc/JnwcRnmT/toyota.jpg" alt=" random imgee" className="w-full h-[350px] object-cover object-center rounded-lg shadow-md image pulse-grow" />

                    <div className="relative px-4 -mt-16  ">
                        <div className="bg-gradient-to-br from-pink-200 to-pink-100 p-6 rounded-lg shadow-lg">
                            <div className="flex items-baseline">
                                <span className="bg-pink-400  text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                                    Ford
                                </span>
                                <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                                 <a  href="">#DieselPowered </a>
                                </div>
                            </div>

                            <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">Ford Mustang</h4>

                            <div className="mt-1">
                            Price: $1800
                                
                            </div>
                            <div className="mt-4">
                                <span className="text-teal-600 text-md font-semibold">4/5 ratings </span>
                                <span className="text-sm text-gray-600">(based on 234 ratings)</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="wrapper bg-gray-400 antialiased text-gray-900">
                <div className='image-container'>

                    <img src=" https://i.postimg.cc/pVj03wQV/1-Tesla-Model-3.jpg" alt=" random imgee" className="w-full h-[350px]  object-cover object-center rounded-lg shadow-md image pulse-grow" />

                    <div className="relative px-4 -mt-16  ">
                        <div className="bg-gradient-to-br from-pink-200 to-pink-100 p-6 rounded-lg shadow-lg">
                            <div className="flex items-baseline">
                                <span className="bg-pink-400  text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                                   Honda
                                </span>
                                <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                                <a  href="">#RoadWarrior</a>
                                </div>
                            </div>

                            <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">Honda Civic</h4>

                            <div className="mt-1">
                               Price: $1800
                                
                            </div>
                            <div className="mt-4">
                                <span className="text-teal-600 text-md font-semibold">4/5 ratings </span>
                                <span className="text-sm text-gray-600">(based on 234 ratings)</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="wrapper bg-gray-400 antialiased text-gray-900">
                <div className='image-container'>

                    <img src=" https://i.postimg.cc/jSpJ7F92/mercedes-benz.webp" alt=" random imgee" className="w-full h-[350px]  object-cover object-center rounded-lg shadow-md image pulse-grow" />

                    <div className="relative px-4 -mt-16  ">
                        <div className="bg-gradient-to-br from-pink-200 to-pink-100 p-6 rounded-lg shadow-lg">
                            <div className="flex items-baseline">
                                <span className="bg-pink-400  text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                                   Tesla
                                </span>
                                <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                                <a  href="">#DieselPowered </a>
                                </div>
                            </div>

                            <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">Tesla Model 3</h4>

                            <div className="mt-1">
                            Price: $1800
                                
                            </div>
                            <div className="mt-4">
                                <span className="text-teal-600 text-md font-semibold">4/5 ratings </span>
                                <span className="text-sm text-gray-600">(based on 234 ratings)</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
           </div>
        </div>
    );
};

export default RecentLaunch;