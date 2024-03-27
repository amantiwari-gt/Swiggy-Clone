import Shimmer from "./Shimmer";
import { SwiggyAPI } from "../utils/constants";
import { useState, useEffect } from "react";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);


    const fetchData = async () => {
        const data = await fetch( 
            SwiggyAPI 
            );
        const json = await data.json();
        console.log(json);
        };

    

    return (
        <div className="restaurant-menu">
            <h1>Menu</h1>
            <h2>restraunat Name</h2>
        </div>
    )
};

export default RestaurantMenu;