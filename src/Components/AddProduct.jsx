

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
    const newProduct = {name,brand,type,description,price,rating}
    console.log(newProduct)

  }

    // style={{ backgroundImage: 'url( https://i.postimg.cc/mk78Sfwr/cars-bg.png)', backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}
    return (
        <div className=" container mx-auto bg-lime-200 shadow-xl" >


            <div>
                <h1 className="text-4xl font-bold text-center pt-12">Add Automotive products</h1>
                <p className="text-sm w-1/2 mx-auto text-center pt-2 ">Complete the form below to add your automotive product Provide essential details <br /> like the product name, brand, type, price, and rating. Click Add Product to submit your listing.</p>



                <form onSubmit={handleAddProduct}>

                    {/* name and brand name */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:px-28 gap-6 mt-10">
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
                    <div className="grid grid-cols-1 md:grid-cols-2  lg:px-28 gap-6">
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
                    <div className="grid grid-cols-1 md:grid-cols-2  lg:px-28 gap-6">
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

                    {/* add button */}
                    <div className="lg:px-28 gap-6">
                        <div className="form-control">

                            <label className="input-group">

                                <input type="submit" value="Add Products" className="input btn bg-lime-600 input-bordered w-full px-4 py-3 outline-none rounded-lg mb-6  " />
                            </label>
                        </div>

                    </div>


                </form>

            </div>

        </div>
    );
};

export default AddProduct;