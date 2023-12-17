import {useEffect, useState} from 'react'
import {Await} from "react-router-dom";
export const useRestraurantMenu = (resId: string) => {
    const [resData, setResData] = useState({})
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.113645&lng=72.8697339&restaurantId="+resId);
        const data = await response.json();
        const itemCards =data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
        const {name, costForTwoMessage, avgRatings, cuisines} = data?.data?.cards[0].card?.card?.info;
        const resDataFromApi = {name, costForTwoMessage, avgRatings, cuisines, itemCards};
        setResData(resDataFromApi);
    }
    return resData
}