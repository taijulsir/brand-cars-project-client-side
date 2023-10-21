import { Outlet } from "react-router-dom";
import Headers from "../Components/Headers";


const Root = () => {
    return (
        <div className=" font-montserrat">
            <Headers></Headers>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;