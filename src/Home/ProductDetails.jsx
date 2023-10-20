import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";
import AuthHook from "../CustomHook/AuthHook";
import Swal from "sweetalert2";


const ProductDetails = () => {
    const { user } = AuthHook()
    const product = useLoaderData()
    const { name, brandImage, price, rating, type,brandName } = product;
    const email = user.email;
    const card = { name, brandImage, price, rating,brandName, type,email }

    const handleAddToCart = () => {
        fetch("https://new-brand-cars.vercel.app/addTocart", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(card),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Your product add into cart successfully.',
                  });
            });


    }


    return (
        <div>
            <section className="overflow-hidden bg-white py-11 font-poppins dark:bg-gray-800">
                <div className="container px-4 py-4 mx-auto lg:py-8 md:px-6">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full px-4 md:w-1/2 ">
                            <div className="sticky top-0 z-50 overflow-hidden ">
                                <div className="relative mb-6 lg:mb-10 lg:h-2/4 ">
                                    <img src={brandImage} alt=""
                                        className="object-cover w-full lg:h-[600px] " />
                                </div>
                                <div className="flex-wrap hidden md:flex ">
                                    <div className="w-1/2 p-2 sm:w-1/4">
                                        <a href="#"
                                            className="block border border-blue-300 dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300">
                                            <img src={brandImage} alt=""
                                                className="object-cover w-full lg:h-20" />
                                        </a>
                                    </div>
                                    <div className="w-1/2 p-2 sm:w-1/4">
                                        <a href="#"
                                            className="block border border-transparent dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300">
                                            <img src={brandImage} alt=""
                                                className="object-cover w-full lg:h-20" />
                                        </a>
                                    </div>
                                    <div className="w-1/2 p-2 sm:w-1/4">
                                        <a href="#"
                                            className="block border border-transparent dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300">
                                            <img src={brandImage} alt=""
                                                className="object-cover w-full lg:h-20" />
                                        </a>
                                    </div>
                                    <div className="w-1/2 p-2 sm:w-1/4">
                                        <a href="#"
                                            className="block border border-transparent dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300">
                                            <img src={brandImage} alt=""
                                                className="object-cover w-full lg:h-20" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 md:w-1/2 ">
                            <div className="lg:pl-20">
                                <div className="mb-8 ">
                                    <span className="text-lg font-semibold text-rose-500 dark:text-rose-200">New</span>
                                    <h2 className="max-w-xl mt-2 mb-6 text-2xl font-bold dark:text-gray-400 md:text-4xl">
                                        {name}</h2>
                                    <div className="flex items-center mb-6">
                                        <ul className="flex mr-2">
                                            <Rating
                                                className=" text-amber-600"
                                                initialRating={rating}
                                                emptySymbol="fa fa-star-o "
                                                fullSymbol="fa fa-star "
                                            />
                                        </ul>
                                        <p className="text-xs dark:text-gray-400 ">(48 customer reviews)</p>
                                    </div>
                                    <p className="max-w-md mb-8 text-gray-700 dark:text-gray-400">
                                        The {name} boasts a captivating design, combining bold aesthetics with practical aerodynamics. Its striking front grille and LED lighting create an iconic presence. Inside, luxurious materials and spaciousness redefine comfort. This design extends the perfect fusion of form and function. The Elegance X7 is a true automotive masterpiece.Crafted with meticulous attention to detail, the {name} design is an embodiment of automotive artistry and innovation.
                                    </p>
                                    <p className="inline-block mb-8 text-4xl font-bold text-gray-700 dark:text-gray-400 ">
                                        <span>{price}</span>
                                        <span
                                            className="text-base font-normal text-gray-500 line-through dark:text-gray-400">$55000</span>
                                    </p>
                                    <p className="text-green-600 dark:text-green-300 ">5 in stock</p>
                                </div>
                                <div className="flex items-center mb-8">
                                    <h2 className="w-16 mr-6 text-xl font-bold dark:text-gray-400">
                                        Colors:</h2>
                                    <div className="flex flex-wrap -mx-2 -mb-2">
                                        <button
                                            className="p-1 mb-2 mr-2 border border-transparent hover:border-blue-400 dark:border-gray-800 dark:hover:border-gray-400 ">
                                            <div className="w-6 h-6 bg-cyan-300"></div>
                                        </button>
                                        <button
                                            className="p-1 mb-2 mr-2 border border-transparent hover:border-blue-400 dark:border-gray-800 dark:hover:border-gray-400">
                                            <div className="w-6 h-6 bg-green-300 "></div>
                                        </button>
                                        <button
                                            className="p-1 mb-2 border border-transparent hover:border-blue-400 dark:border-gray-800 dark:hover:border-gray-400">
                                            <div className="w-6 h-6 bg-red-200 "></div>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex items-center mb-8">
                                    <h2 className="w-16 text-xl font-bold dark:text-gray-400">
                                        Type:</h2>
                                    <div className="flex flex-wrap -mx-2 -mb-2">
                                        <button
                                            className="py-1 mb-2 mr-1 font-bold text-xl hover:border-blue-400 dark:border-gray-400 hover:text-blue-600 dark:hover:border-gray-300 dark:text-gray-400">{type}
                                        </button>

                                    </div>
                                </div>
                                <div className="w-32 mb-8 ">
                                    <label htmlFor=""
                                        className="w-full text-xl font-semibold text-gray-700 dark:text-gray-400">Quantity</label>
                                    <div className="relative flex flex-row w-full h-10 mt-4 bg-transparent rounded-lg">
                                        <button
                                            className="w-20 h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-400">
                                            <span className="m-auto text-2xl font-thin">-</span>
                                        </button>
                                        <input type="number"
                                            className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-300 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black"
                                            placeholder="1" />
                                        <button
                                            className="w-20 h-full text-gray-600 bg-gray-300 rounded-r outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-400">
                                            <span className="m-auto text-2xl font-thin">+</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex flex-wrap items-center -mx-4 ">
                                    <div className="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">
                                        <button
                                            onClick={handleAddToCart}
                                            className="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300">
                                            Add to Cart
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductDetails;