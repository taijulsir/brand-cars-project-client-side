import toast, { Toaster } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";


const ProductUpdate = () => {

    const product = useLoaderData();
    const { _id, name, brandImage, price, rating, type, brandName, description } = product;
    const handleUpdateProduct = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const brandName = form.brand.value;
        const type = form.type.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const brandImage = form.brandImage.value;

        const updateProduct = { name, brandName, type, description, price, rating, brandImage }
        console.log(updateProduct)


        fetch(`http://localhost:5000/brandNames/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    toast.success('Coffe updated')
                }

            })


    }

    return (
        <div className="container mx-auto">
            <div>
                <h1 className="text-4xl font-bold text-center pt-12  text-lime-700">Update Automotive products</h1>
                <p className="text-sm w-1/2 mx-auto text-center pt-2 ">Complete the form below to add your automotive product Provide essential details <br /> like the product name, brand, type, price, and rating. Click Add Product to submit your listing.</p>

                {/* add product form */}
                <form onSubmit={handleUpdateProduct} className="lg:px-0 px-3">

                    {/* name and brand name */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:px-24 gap-6 mt-10">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <label className="input-group">

                                <input type="text" placeholder="Enter products name" name="name" className="input input-bordered w-full px-4 py-3 outline-none rounded-lg mb-4  " defaultValue={name} />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <label className="input-group">

                                
                                <select name="brand" id="" className='input input-bordered w-full px-4 py-3 outline-none rounded-lg  mb-4' defaultValue={brandName}>

                                    <option value="BMW">BMW</option>
                                    <option value="Ford">Ford</option>
                                    <option value="Tesla">Tesla</option>
                                    <option value="Toyota">Toyota</option>
                                    <option value="Honda">Honda</option>
                                    <option value="Mercedes-Benz">Mercedes-Benz</option>

                                </select>
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

                                <input type="text" placeholder="Type" name="type" className="input input-bordered w-full px-4 py-3 outline-none rounded-lg mb-4  " defaultValue={type} />
                            </label>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <label className="input-group">

                                <input type="text" placeholder="Enter description" name="description" className="input input-bordered w-full px-4 py-3 outline-none rounded-lg mb-4  " defaultValue={description} />
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

                                <input type="text" placeholder="Rating" name="rating" className="input input-bordered w-full px-4 py-3 outline-none rounded-lg  mb-5 " defaultValue={rating} />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">


                                <input type="text" placeholder="Price" name="price" className="input input-bordered w-full px-4 py-3 outline-none rounded-lg  mb-5 " defaultValue={price} />
                            </label>
                        </div>


                    </div>

                    {/* photo url */}
                    <div className=" lg:px-24">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Brand Image</span>
                            </label>
                            <label className="input-group">

                                <input type="text" placeholder="Photo Url" name="brandImage" className="input input-bordered w-full px-4 py-3 outline-none rounded-lg  mb-10 " defaultValue={brandImage} />
                            </label>
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
            <Toaster></Toaster>
        </div>
    );
};

export default ProductUpdate;