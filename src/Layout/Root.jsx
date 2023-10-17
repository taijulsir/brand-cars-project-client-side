import { Outlet } from "react-router-dom";
import Headers from "../Components/Headers";


const Root = () => {
    return (
        <div>
            <Headers></Headers>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;