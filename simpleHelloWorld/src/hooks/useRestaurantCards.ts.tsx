import {useEffect, useState} from 'react'
export const useRestraurantCard = () => {
    const [resList, setResList] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async ()=> {
        const response= await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.113645&lng=72.8697339&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",)
        const data = await response.json();
        let restListFromApi = data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        const resData = restListFromApi?.map((res) => {
            return {
                name: res.info.name,
                cuisines: res.info.cuisines.join(", "),
                id: res.info.id,
                star: res.info.avgRating,
                cloudinaryImageId: res.info.cloudinaryImageId,
                promoted: Math.floor(Math.random() * 101) >= 70 ? true: false,
                searchName: res.info.name.toLowerCase()
            }
        })
        setResList(resData);
    }

    return {resList}
}