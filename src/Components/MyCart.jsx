import { useState } from "react";
import AuthHook from "../CustomHook/AuthHook";
import { useEffect } from "react";
import Swal from "sweetalert2";


const MyCart = () => {

    const { user } = AuthHook()
    const [carts, setCarts] = useState([])
    const email = user?.email;
    console.log(email, user)


    useEffect(() => {
        fetch(`http://localhost:5000/addTocart/${email}`)
            .then(res => res.json())
            .then(data => {
                setCarts(data)
            })
    }, [email])

    const handleBuyNow = () => {
        Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Congratulations,We will deliver your product on time.',
          });
    }
    return (
        <div>

            {/* All product item */}
             <section className="flex  bg-stone-200 lg:min-h-screen font-poppins dark:bg-gray-700">
            <div className=" flex-1 px-4 py-6 mx-auto container lg:py-4 md:px-6">
                <div className="p-8 bg-gray-50 dark:bg-gray-800">
                    <h2 className="mb-8 text-4xl font-bold dark:text-gray-400">Your Cart</h2>
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full px-4 mb-8 xl:w-8/12 xl:mb-0">
                            <div className="flex flex-wrap items-center mb-6 -mx-4 md:mb-8">
                                <div className="w-full md:block hidden px-4 mb-6 md:w-4/6 lg:w-6/12 md:mb-0">
                                    <h2 className="font-bold text-gray-500 dark:text-gray-400">Product name</h2>
                                </div>
                                <div className="hidden px-4 lg:block lg:w-2/12">
                                    <h2 className="font-bold text-gray-500 dark:text-gray-400">Price</h2>
                                </div>
                                <div className="hidden md:block px-4 md:w-1/6 lg:w-2/12 ">
                                    <h2 className="font-bold text-gray-500 dark:text-gray-400">Quantity</h2>
                                </div>
                                <div className="hidden md:block px-4 text-right md:w-1/6 lg:w-2/12 ">
                                    <h2 className="font-bold text-gray-500 dark:text-gray-400"> Subtotal</h2>
                                </div>
                            </div>

                            <div>
                                {
                                    carts.map(cart =>  <div key={cart._id} className="py-4 mb-8 border-t border-b border-gray-200 dark:border-gray-700">
                                    <div className="flex flex-wrap items-center mb-6 -mx-4 md:mb-8">
                                        <div className="w-full px-4 mb-6 md:w-4/6 lg:w-6/12 md:mb-0">
                                            <div className="flex flex-wrap items-center -mx-4">
                                                <div className="w-full px-4 mb-3 md:w-1/3">
                                                    <div className="w-full h-96 md:h-24 md:w-24">
                                                        <img src={cart.brandImage} alt="" className="object-cover w-full h-full"/>
                                                    </div>
                                                </div>
                                                <div className="w-2/3 px-4">
                                                    <h2 className="mb-2 text-xl font-bold dark:text-gray-400">{cart.name}</h2>
                                                    <p className="text-gray-500 dark:text-gray-400 text-sm ">Brand: {cart.brandName}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hidden px-4 lg:block lg:w-2/12">
                                            <p className="text-lg font-bold text-blue-500 dark:text-gray-400">{cart.price}</p>
                                            <span className="text-xs text-gray-500 line-through dark:text-gray-400">$60000</span>
                                        </div>
                                        <div className="w-auto px-4 md:w-1/6 lg:w-2/12 ">
                                            <div className="inline-flex items-center px-4 font-semibold text-gray-500 border border-gray-200 rounded-md dark:border-gray-700 ">
                                                <button className="py-2 hover:text-gray-700 dark:text-gray-400">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
                                                        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"></path>
                                                    </svg>
                                                </button>
                                                <input type="number" className="w-12 px-2 py-4 text-center border-0 rounded-md dark:bg-gray-800 bg-gray-50 dark:text-gray-400 md:text-right" placeholder="1"/>
                                                    <button className="py-2 hover:text-gray-700 dark:text-gray-400">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                                                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                                                        </svg>
                                                    </button>
                                            </div>
                                        </div>
                                        <div className="w-auto px-4 text-right md:w-1/6 lg:w-2/12 ">
                                            <p className="text-lg font-bold text-blue-500 dark:text-gray-400">{cart.price}</p>
                                        </div>
                                    </div>
                                    </div>)
                                }
                            </div>
                            <div className="flex flex-wrap items-center gap-4">
                                <span className="text-gray-700 dark:text-gray-400">Apply Coupon</span>
                                <input type="text" className="flex-1 px-8 py-4 font-normal placeholder-gray-300 border dark:border-gray-700 dark:placeholder-gray-500 md:flex-none md:mr-6 dark:text-gray-400 dark:bg-gray-800" placeholder="x304k45" required=""/>
                                    <button className="flex-1 inline-block px-8 py-4 font-bold text-center text-gray-100 bg-blue-500 rounded-md hover:bg-blue-600 md:flex-none">Apply</button>
                            </div>
                        </div>
                        <div className="w-full px-4 xl:w-4/12">
                            <div className="p-6 border border-blue-100 dark:bg-gray-900 dark:border-gray-900 bg-blue-50 md:p-8">
                                <h2 className="mb-8 text-3xl font-bold text-gray-700 dark:text-gray-400">Order Summary</h2>
                                <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-300 dark:border-gray-700 ">
                                    <span className="text-gray-700 dark:text-gray-400">Quantity</span>
                                    <span className="text-xl font-bold text-gray-700 dark:text-gray-400 ">{carts.length}</span>
                                </div>
                                <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-300 dark:border-gray-700 ">
                                    <span className="text-gray-700 dark:text-gray-400">Subtotal</span>
                                    <span className="text-xl font-bold text-gray-700 dark:text-gray-400 ">$99</span>
                                </div>
                                <div className="flex items-center justify-between pb-4 mb-4 ">
                                    <span className="text-gray-700 dark:text-gray-400 ">Shipping</span>
                                    <span className="text-xl font-bold text-gray-700 dark:text-gray-400 ">Free</span>
                                </div>
                                <div className="flex items-center justify-between pb-4 mb-4 ">
                                    <span className="text-gray-700 dark:text-gray-400">Order Total</span>
                                    <span className="text-xl font-bold text-gray-700 dark:text-gray-400">
                                        
                                        {carts.length === 0 ? '$0.00' : '$116000'}</span>
                                </div>
                                <h2 className="text-lg text-gray-500 dark:text-gray-400">We offer:</h2>
                                <div className="flex items-center mb-4 ">
                                    <a href="#">
                                        <img src="https://i.postimg.cc/g22HQhX0/70599-visa-curved-icon.png" alt="" className="object-cover h-16 mr-2 w-26"/>
                                    </a>
                                    <a href="#">
                                        <img src="https://i.postimg.cc/HW38JkkG/38602-mastercard-curved-icon.png" alt="" className="object-cover h-16 mr-2 w-26"/>
                                    </a>
                                    <a href="#">
                                        <img src="https://i.postimg.cc/HL57j0V3/38605-paypal-straight-icon.png" alt="" className="object-cover h-16 mr-2 w-26"/>
                                    </a>
                                </div>
                                <div className="flex items-center justify-between ">
                                    <button onClick={handleBuyNow} className="block w-full py-4 font-bold text-center text-gray-100 uppercase bg-blue-500 rounded-md hover:bg-blue-600">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        {/* footer item */}
        <div>
        <footer
                className="flex flex-col items-center bg-neutral-900 text-center text-white ">
                    <h3 className="text-2xl pt-10 font-bold">Follow Us On</h3>
                <div className=" px-6 pt-6">
                    <div className="mb-6 flex justify-center lg:gap-8">
                        <a
                            href="#!"
                            type="button"
                            className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                            data-te-ripple-init
                            data-te-ripple-color="light">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="mx-auto h-full w-4"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                            </svg>
                        </a>

                        <a
                            href="#!"
                            type="button"
                            className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                            data-te-ripple-init
                            data-te-ripple-color="light">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="mx-auto h-full w-4"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                            </svg>
                        </a>

                        <a
                            href="#!"
                            type="button"
                            className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                            data-te-ripple-init
                            data-te-ripple-color="light">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="mx-auto h-full w-4"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                                    fillRule="evenodd"
                                    clipRule="evenodd" />
                            </svg>
                        </a>

                        <a
                            href="#!"
                            type="button"
                            className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                            data-te-ripple-init
                            data-te-ripple-color="light">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="mx-auto h-full w-4"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </a>

                        <a
                            href="#!"
                            type="button"
                            className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                            data-te-ripple-init
                            data-te-ripple-color="light">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="mx-auto h-full w-4"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                            </svg>
                        </a>

                        <a
                            href="#!"
                            type="button"
                            className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                            data-te-ripple-init
                            data-te-ripple-color="light">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="mx-auto h-full w-4"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                    </div>
                </div>


                <div
                    className="w-full p-4 text-center"
                    style={{backgroundColor:(0, 0, 0, 0.2)}}>
                    © 2023 Copyright:
                    <a className="text-whitehite" href=""
                    >Romoz Cars</a>
                </div>
            </footer>
        </div>
         </div>
       
    );
};

export default MyCart;