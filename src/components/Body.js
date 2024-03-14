import RestrauntCard from "./RestrauntCard";
import {useState, useEffect} from'react';
import {SwiggyAPI} from "../utils/constants";
import {Shimmer} from "./Shimmer";

const Body = () => {

    const [listOfRes, setListOfRes] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch( 
            SwiggyAPI 
            );
        const json = await data.json();
        setListOfRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    return (
        <div className='body'>
            <div className='filter'>
                <button 
                    className='filter-btn'
                    onClick={
                        () => {
                            const filteredRes = listOfRes.filter(
                                (res) => res.info.avgRating > 4.3
                            );
                            setListOfRes(filteredRes);
                        }}>
                    Top rated restaurants
                </button>
            </div>
            <div className='res-container'>
                {listOfRes.map(restaurant => (
                    <RestrauntCard key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>
        </div>
    )
};

export default Body;