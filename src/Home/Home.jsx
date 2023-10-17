import { useLoaderData } from "react-router-dom";
import Banners from "./Banners";
import Brands from "./Brands";
import Footer from "./Footer";


const Home = () => {
    const loadedBrands = useLoaderData()
    return (
        <div className="space-y-12">
          <Banners></Banners>
         <Brands loadedBrands={loadedBrands}></Brands>
         <Footer></Footer>
        </div>
    );
};

export default Home;