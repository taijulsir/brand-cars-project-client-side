import { useLoaderData } from "react-router-dom";
import Banners from "./Banners";
import Brands from "./Brands";
import Footer from "./Footer";
import WhyChoose from "./WhyChoose";
import RecentLaunch from "./RecentLaunch";



const Home = () => {
    const loadedBrands = useLoaderData()
    return (
        <div className="space-y-12">
          <Banners></Banners>       
         <Brands loadedBrands={loadedBrands}></Brands>
         <RecentLaunch></RecentLaunch>
         <WhyChoose></WhyChoose>
         <Footer></Footer>
        </div>
    );
};

export default Home;