import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import {ShimmerComponent} from "./Shimmer";
export const RestaurantMenu = () => {
    const {resId}  = useParams();
    const [resData, setResData] = useState({});
    const fetchMenu = async () => {
        const response= await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.113645&lng=72.8697339&restaurantId="+resId);
        const data = await response.json();
        const itemCards =data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
        const {name, costForTwoMessage, avgRatings, cuisines} = data?.data?.cards[0].card?.card?.info;
        const resDataFromApi = {name, costForTwoMessage, avgRatings, cuisines, itemCards};
        setResData(resDataFromApi);
    }
    useEffect(() => {
      fetchMenu();
    }, []);

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