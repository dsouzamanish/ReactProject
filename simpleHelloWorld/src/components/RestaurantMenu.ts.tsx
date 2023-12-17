import {useParams} from 'react-router-dom'
import {ShimmerComponent} from "./Shimmer";
import {useRestraurantMenu} from "../hooks/useRestraurantMenu";
export const RestaurantMenu = () => {
    const {resId}  = useParams();
    const resData = useRestraurantMenu(resId);
    if(resData === {}) {
        return <ShimmerComponent />
    }
    return (
        <div className="restaurantMenu">
            <h1>{resData.name}</h1>
            <h3>{resData.cuisines}</h3>
            <h3>{resData.costForTwoMessage}</h3>
            <h3>{resData.avgRatings}</h3>
            <br/>
            <div className="menuItems">
                <ul className="menuList">
                    {resData.itemCards?.map(({card}) => (
                        <li key={card?.info.id}>{card.info.name}                                     Rs {card.info.price/100}</li>
                    ))}
                </ul>
            </div>

        </div>
    )
}