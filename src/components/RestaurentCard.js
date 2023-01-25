
import { IMG_CDN_URL } from "../../constant";


const RestraurantCard = ({
    name,
    cuisines,
    cloudinaryImageId,
    lastMileTravelString,costForTwoString,
  }) => {
    return (
      <div className="card">
        <img src={IMG_CDN_URL + cloudinaryImageId} />
        <h2> {name}</h2>
        <h3>{cuisines.join(",  ")}</h3>
        <h4>{lastMileTravelString} </h4>
        {/* <h4>{costForTwoString}</h4> */}
      </div>
    );
  };

  export default RestraurantCard;