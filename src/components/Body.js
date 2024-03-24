import RestrauntCard from "./RestrauntCard";
import {useState, useEffect} from'react';
import {SwiggyAPI} from "../utils/constants";
import {Shimmer} from "./Shimmer";

const Body = () => {

    const [listOfRes, setListOfRes] = useState([]);
    const [filteredResList, setFilteredResList] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch( 
            SwiggyAPI 
            );
        const json = await data.json();
        setListOfRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredResList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    return (
        <div className='body'>
            <div className='filter'>
                <input 
                    className="input-field"
                    type="text"
                    placeholder="Search for restaurants"
                    onChange={
                        (e) => {
                            const filteredRes = listOfRes.filter(
                                (res) => res.info.name.toLowerCase().includes(e.target.value.toLowerCase())
                            );
                            setFilteredResList(filteredRes);
                        }
                    }
                    >
                </input>
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
                {filteredResList.map(restaurant => (
                    <RestrauntCard key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>
        </div>
    )
};

export default Body;