
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Brands = ({loadedBrands}) => {

    return (
        <div className="container mx-auto">
            <h1 className=" font-bold text-2xl lg:text-4xl mb-12">Explore Our Automotive Brands</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
                {
                    loadedBrands.map(brands=> <Link to={`/brands/${brands.brandName}`} key={brands.id}><div  className="card  transform hover:-translate-y-2 transition-transform duration-300 ease-in-out  bg-base-100 shadow-xl">
                    <figure><img className='h-[257px] w-full' src={brands.image} alt="cars" /></figure>
                    <div className="  bg-sky-300 shadow-xl rounded-lg font-extrabold">
                      <h2 className=' text-2xl py-5 px-4'>
                       {brands.brandName}
                       
                      </h2>
                      
                    </div>
                  </div></Link>)
                }
            </div>
        </div>
    );
};

Brands.propTypes = {
    loadedBrands: PropTypes.object
}

export default Brands;