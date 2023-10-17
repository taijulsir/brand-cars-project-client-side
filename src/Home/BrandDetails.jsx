import { useLoaderData } from "react-router-dom";


const BrandDetails = () => {
    const brands = useLoaderData()
   
    return (
        <div>
            <h1>Hello this is details page</h1>
        </div>
    );
};

export default BrandDetails;