
import { HiArrowCircleDown } from "react-icons/hi";

const AddProduct = () => {

    const handleAddProduct = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const brandImage = form.brandImage.value;
        // advertise images
        const advertise1Image = form.advertise1.value;
        const advertise2Image = form.advertise2.value;
        const advertise3Image = form.advertise3.value;

        // exclusive product field 
        const productName1 = form.productName1.value;
        const productName2 = form.productName2.value;
        const productName3 = form.productName3.value;
        const productName4 = form.productName4.value;

        const productDesc1 = form.productDesc1.value;
        const productDesc2 = form.productDesc2.value;
        const productDesc3 = form.productDesc3.value;
        const productDesc4 = form.productDesc4.value;

        const productPrice1 = form.productPrice1.value;
        const productPrice2 = form.productPrice2.value;
        const productPrice3 = form.productPrice3.value;
        const productPrice4 = form.productPrice4.value;

        const productType1 = form.productType1.value;
        const productType2 = form.productType2.value;
        const productType3 = form.productType3.value;
        const productType4 = form.productType4.value;

        const productPhoto1 = form.productPhoto1.value;
        const productPhoto2 = form.productPhoto2.value;
        const productPhoto3 = form.productPhoto3.value;
        const productPhoto4 = form.productPhoto4.value;




        const newProduct = { name, brand, type, description, price, rating,brandImage,
            advertiseImage: [
                {image: advertise1Image},
                {image: advertise2Image},
                {image: advertise3Image}
            ],
            productDetails: [
                {
                    productName: productName1,
                    productDesc: productDesc1,
                    productPrice: productPrice1,
                    productType: productType1,
                    productPhoto: productPhoto1,

                },
                {
                    productName: productName2,
                    productDesc: productDesc2,
                    productPrice: productPrice2,
                    productType: productType2,
                    productPhoto: productPhoto2,

                },
                {
                    productName: productName3,
                    productDesc: productDesc3,
                    productPrice: productPrice3,
                    productType: productType3,
                    productPhoto: productPhoto3,

                },
                {
                    productName: productName4,
                    productDesc: productDesc4,
                    productPrice: productPrice4,
                    productType: productType4,
                    productPhoto: productPhoto4,

                },
               
            ]
         }
        console.log(newProduct)

    }


    return (
        <div className=" max-w-7xl mx-auto" >
            <div>
                <div>
                    <h1 className="text-4xl font-bold text-center pt-12  text-lime-700">Add Automotive products</h1>
                    <p className="text-sm w-1/2 mx-auto text-center pt-2 ">Complete the form below to add your automotive product Provide essential details <br /> like the product name, brand, type, price, and rating. Click Add Product to submit your listing.</p>

                    {/* add product form */}
                    <form onSubmit={handleAddProduct} className="lg:px-0 px-3">

                        {/* name and brand name */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:px-24 gap-6 mt-10">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <label className="input-group">

                                    <input type="text" placeholder="Enter products name" name="name" className="input input-bordered w-full px-4 py-3 outline-none rounded-lg mb-4  " />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Brand Name</span>
                                </label>
                                <label className="input-group">

                                    <input type="text" placeholder="Enter brand name" name="brand" className="input input-bordered w-full px-4 py-3 outline-none rounded-lg  mb-4 " />
                                </label>
                            </div>


                        </div>

                        {/* type description */}
                        <div className="grid grid-cols-1 md:grid-cols-2  lg:px-24 gap-6">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Type</span>
                                </label>
                                <label className="input-group">

                                    <input type="text" placeholder="Type" name="type" className="input input-bordered w-full px-4 py-3 outline-none rounded-lg mb-4  " />
                                </label>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <label className="input-group">

                                    <input type="text" placeholder="Enter description" name="description" className="input input-bordered w-full px-4 py-3 outline-none rounded-lg mb-4  " />
                                </label>
                            </div>

                        </div>

                        {/* rating and price */}
                        <div className="grid grid-cols-1 md:grid-cols-2  lg:px-24 gap-6">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <label className="input-group">

                                    <input type="text" placeholder="Rating" name="rating" className="input input-bordered w-full px-4 py-3 outline-none rounded-lg  mb-10 " />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <label className="input-group">
                                   

                                    <input type="text" placeholder="Price" name="price" className="input input-bordered w-full px-4 py-3 outline-none rounded-lg  mb-10 " />
                                </label>
                            </div>


                        </div>

                        {/* photo url */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:px-24 gap-6">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Brand Image</span>
                                </label>
                                <label className="input-group">

                                    <input type="text" placeholder="Price" name="brandImage" className="input input-bordered w-full px-4 py-3 outline-none rounded-lg  mb-10 " />
                                </label>
                            </div>

                            {/* advertise image section */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 col-span-3">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Advertise Image 1</span>
                                    </label>
                                    <label className="input-group">

                                        <input type="text" placeholder="Price" name="advertise1" className="input input-bordered w-full px-4 py-3 outline-none rounded-lg  mb-10 " />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Advertise Image 2</span>
                                    </label>
                                    <label className="input-group">

                                        <input type="text" placeholder="Price" name="advertise2" className="input input-bordered w-full px-4 py-3 outline-none rounded-lg  mb-10 " />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Advertise Image 3</span>
                                    </label>
                                    <label className="input-group">

                                        <input type="text" placeholder="Price" name="advertise3" className="input input-bordered w-full px-4 py-3 outline-none rounded-lg  mb-10 " />
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* brands exclusive products */}

                        <div className="lg:px-24 space-y-4" >
                            <h3 className="underline text-xl font-medium flex  items-center" >Brands Exclsive  4 Products:<HiArrowCircleDown></HiArrowCircleDown> </h3>

                            {/* product 1  */}
                            <div className="grid grid-cols-5 gap-6">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <label className="input-group">

                                        <input type="text" placeholder="Enter products name" name="productName1" className="input input-bordered w-full px-4 py-3 outline-none rounded-lg mb-4  " />
                                    </label>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Description</span>
                                    </label>
                                    <label className="input-group">

                                        <input type="text" placeholder="Enter description" name="productDesc1" className="input input-bordered w-full px-4 py-3 outline-none rounded-lg mb-4  " />
                                    </label>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <label className="input-group">

                                        <input type="text" placeholder="Price" name="productPrice1" className="input input-bordered w-full px-4 py-3 outline-none rounded-lg mb-4  " />
                                    </label>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Type</span>
                                    </label>
                                    <label className="input-group">

                                        <input type="text" placeholder="Type" name="productType1" className="input input-bordered w-full px-4 py-3 outline-none rounded-lg mb-4  " />
                                    </label>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo</span>
                                    </label>
                                    <label className="input-group">

                                        <input type="text" placeholder="Enter photo url" name="productPhoto1" className="input input-bordered w-full px-4 py-3 outline-none rounded-lg mb-4  " />
                                    </label>
                                </div>
                            </div>

                            {/* product 2  */}
                            <div className="grid grid-cols-5 gap-6">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <label className="input-group">

                                        <input type="text" placeholder="Enter products name" name="productName2" className="input input-bordered w-full px-4 py-3 outline-none rounded-lg mb-4  " />
                                    </label>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Description</span>
                                    </label>
                                    <label className="input-group">

                                        <input type="text" placeholder="Enter description" name="productDesc2" className="input input-bordered w-full px-4 py-3 outline-none rounded-lg mb-4  " />
                                    </label>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <label className="input-group">

                                        <input type="text" placeholder="Price" name="productPrice2" className="input input-bordered w-full px-4 py-3 outline-none rounded-lg mb-4  " />
                                    </label>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Type</span>
                                    </label>
                                    <label className="input-group">

                                        <input type="text" placeholder="Type" name="productType2" className="input input-bordered w-full px-4 py-3 outline-none rounded-lg mb-4  " />
                                    </label>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo</span>
                                    </label>
                                    <label className="input-group">

                                        <input type="text" placeholder="Enter photo url" name="productPhoto2" className="input input-bordered w-full px-4 py-3 outline-none rounded-lg mb-4  " />
                                    </label>
                                </div>
                            </div>

                            {/* product 3  */}
                            <div className="grid grid-cols-5 gap-6">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <label className="input-group">

                                        <input type="text" placeholder="Enter products name" name="productName3" className="input input-bordered w-full px-4 py-3 outline-none rounded-lg mb-4  " />
                                    </label>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Description</span>
                                    </label>
                                    <label className="input-group">

                                        <input type="text" placeholder="Enter description" name="productDesc3" className="input input-bordered w-full px-4 py-3 outline-none rounded-lg mb-4  " />
                                    </label>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <label className="input-group">

                                        <input type="text" placeholder="Price" name="productPrice3" className="input input-bordered w-full px-4 py-3 outline-none rounded-lg mb-4  " />
                                    </label>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Type</span>
                                    </label>
                                    <label className="input-group">

                                        <input type="text" placeholder="Type" name="productType3" className="input input-bordered w-full px-4 py-3 outline-none rounded-lg mb-4  " />
                                    </label>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo</span>
                                    </label>
                                    <label className="input-group">

                                        <input type="text" placeholder="Enter photo url" name="productPhoto3" className="input input-bordered w-full px-4 py-3 outline-none rounded-lg mb-4  " />
                                    </label>
                                </div>
                            </div>

                            {/* product 4  */}
                            <div className="grid grid-cols-5 gap-6">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <label className="input-group">

                                        <input type="text" placeholder="Enter products name" name="productName4" className="input input-bordered w-full px-4 py-3 outline-none rounded-lg mb-4  " />
                                    </label>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Description</span>
                                    </label>
                                    <label className="input-group">

                                        <input type="text" placeholder="Enter description" name="productDesc4" className="input input-bordered w-full px-4 py-3 outline-none rounded-lg mb-4  " />
                                    </label>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <label className="input-group">

                                        <input type="text" placeholder="Price" name="productPrice4" className="input input-bordered w-full px-4 py-3 outline-none rounded-lg mb-4  " />
                                    </label>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Type</span>
                                    </label>
                                    <label className="input-group">

                                        <input type="text" placeholder="Type" name="productType4" className="input input-bordered w-full px-4 py-3 outline-none rounded-lg mb-4  " />
                                    </label>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo</span>
                                    </label>
                                    <label className="input-group">

                                        <input type="text" placeholder="Enter photo url" name="productPhoto4" className="input input-bordered w-full px-4 py-3 outline-none rounded-lg mb-4  " />
                                    </label>
                                </div>
                            </div>

                        </div>

                        {/* add button */}
                        <div className="lg:px-24 gap-6">
                            <div className="form-control">

                                <label className="input-group">

                                    <input type="submit" value="Add Products" className="input btn bg-lime-600 input-bordered w-full px-4 py-3 outline-none rounded-lg mb-6  " />
                                </label>
                            </div>

                        </div>


                    </form>

                </div>
                {/* contact us section */}
                <div className="max-w-7xl my-24 mx-auto md:px-6">

                    <h1 className="text-4xl text-center font-bold">Contact us</h1>

                    <section className="mb-32">
                        <div
                            className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                            <div className="flex flex-wrap items-center">
                                <div className="block w-full shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
                                    <div className="h-[500px] w-full">
                                        <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                            className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" frameBorder="0"
                                            allowfullscreen></iframe>
                                    </div>
                                </div>
                                <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
                                    <div className="flex flex-wrap px-3 pt-12 pb-12 md:pb-0 lg:pt-0">
                                        <div className="mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:w-6/12 xl:px-12">
                                            <div className="flex items-start">
                                                <div className="shrink-0">
                                                    <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                                                            stroke="currentColor" className="h-6 w-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                                d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="ml-6 grow">
                                                    <p className="mb-2 font-bold dark:text-white">
                                                        Technical support
                                                    </p>
                                                    <p className="text-neutral-500 dark:text-neutral-200">
                                                        support@example.com
                                                    </p>
                                                    <p className="text-neutral-500 dark:text-neutral-200">
                                                        +1 234-567-89
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:w-6/12 xl:px-12">
                                            <div className="flex items-start">
                                                <div className="shrink-0">
                                                    <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                                                            stroke="currentColor" className="h-6 w-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                                d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="ml-6 grow">
                                                    <p className="mb-2 font-bold dark:text-white">
                                                        Sales questions
                                                    </p>
                                                    <p className="text-neutral-500 dark:text-neutral-200">
                                                        sales@example.com
                                                    </p>
                                                    <p className="text-neutral-500 dark:text-neutral-200">
                                                        +1 234-567-89
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:mb-0 xl:w-6/12 xl:px-12">
                                            <div className="align-start flex">
                                                <div className="shrink-0">
                                                    <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                                                            stroke="currentColor" className="h-6 w-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                                d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="ml-6 grow">
                                                    <p className="mb-2 font-bold dark:text-white">Press</p>
                                                    <p className="text-neutral-500 dark:text-neutral-200">
                                                        press@example.com
                                                    </p>
                                                    <p className="text-neutral-500 dark:text-neutral-200">
                                                        +1 234-567-89
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:w-6/12 xl:px-12">
                                            <div className="align-start flex">
                                                <div className="shrink-0">
                                                    <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                                                            stroke="currentColor" className="h-6 w-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                                d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 002.248-2.354M12 12.75a2.25 2.25 0 01-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 00-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 01.4-2.253M12 8.25a2.25 2.25 0 00-2.248 2.146M12 8.25a2.25 2.25 0 012.248 2.146M8.683 5a6.032 6.032 0 01-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0115.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 00-.575-1.752M4.921 6a24.048 24.048 0 00-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 01-5.223 1.082" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="ml-6 grow">
                                                    <p className="mb-2 font-bold dark:text-white">Bug report</p>
                                                    <p className="text-neutral-500 dark:text-neutral-200">
                                                        bugs@example.com
                                                    </p>
                                                    <p className="text-neutral-500 dark:text-neutral-200">
                                                        +1 234-567-89
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default AddProduct;