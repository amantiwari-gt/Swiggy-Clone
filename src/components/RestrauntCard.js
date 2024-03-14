import { CDN_URL } from "../utils/constants";

const RestrauntCard = (props) => {
    // console.log(props);
    const {resData} = props;

    const {name, cuisines, avgRating, costForTwo, cloudinaryImageId} = resData?.info;

    // console.log(resData.length);
    return (
        <div className = "res-cards" style={{backgroundColor: "#f0f0f0"}}>
            <img 
                className="res-logo"
                src={CDN_URL + cloudinaryImageId}
                alt="restraunt-logo">
            </img>

            <h3>{name}</h3>
            <span>
                <h4>{cuisines.join(", ")}</h4>
                <h4>Rating: {avgRating}</h4>
                <h4>Cost: {costForTwo}</h4>
            </span>
        </div>
    )
};

export default RestrauntCard;