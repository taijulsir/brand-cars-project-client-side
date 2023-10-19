
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";

const ProductCard = () => {
    const products = useLoaderData()
    return (
        <div className="container mx-auto">


            {/* product item */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                {products.map(product => <div key={product._id}>  <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                    <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
                        <img className="object-cover" src={product.image} />
                        <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span>
                    </a>
                    <div className="mt-4 px-5 pb-5">
                        <h5 className="text-2xl tracking-tight text-slate-900 font-semibold">{product.name}</h5>
                        <div className="flex justify-between items-center text-sm text-amber-600">
                             <h3>Brand: {product.brandName}</h3>
                             <p>Type: {product.type}</p>
                        </div>
                        <div className="mt-2 mb-5 flex items-center justify-between">
                            <p>
                                <span className="text-3xl font-bold text-slate-900">{product.price}</span>
                                <span className="text-sm text-slate-900 line-through">$60000</span>
                            </p>
                            <div className="flex items-center">
                                <Rating
                                    className=" text-amber-600"
                                    initialRating={product.rating}
                                    emptySymbol="fa fa-star-o "
                                    fullSymbol="fa fa-star "
                                />
                            </div>
                        </div>


                        <div className="flex justify-center items-center pb-2">
                            <div className="w-1/2 p-2">
                                <button className="block w-full bg-teal-500 hover:bg-teal-600 text-white border-2 border-teal-500 hover:border-teal-600 px-3 py-2 rounded uppercase font-poppins font-medium">
                                    <svg viewBox="0 0 24 24" className="inline w-4 h-4">
                                        <path fill="currentColor" d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z" />
                                    </svg> Details
                                </button>
                            </div>
                            <div className="w-1/2 p-2">
                                <button className="block w-full bg-white hover:bg-gray-100 text-teal-500 border-2 border-teal-500 px-3 py-2 rounded uppercase font-poppins font-medium">
                                    Update
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
                </div>)}



            </div>


        </div>
    );
};

export default ProductCard;