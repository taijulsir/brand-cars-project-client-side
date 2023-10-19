import { useState } from "react";
import AuthHook from "../CustomHook/AuthHook";
import { useEffect } from "react";


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
    return (
        <div>
            
        </div>
    );
};

export default MyCart;