import {useState, useEffect} from 'react';
import {ShimmerComponent} from "./Shimmer";
import {Link} from "react-router-dom";
import {Star} from "./Star";

const RestaurantCard = ({resData}) => {

    return (<div className="restaurantCard">
        <div>
            <img className="restaurantCardImage"
                 src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.cloudinaryImageId} />
        </div>
        <h3>{resData.name}</h3>
        <h3>{resData.cuisines}</h3>
        <h4><Star stars = {resData.star}/></h4>
    </div>)
}



export  const RestaurantContainer = () => {
    const [resList, setResList] = useState([]);
    const [filteredResList, setFilteredResList] = useState([]);

    const [searchText, setSearchText] = useState();

    useEffect(  () => {
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
                    cloudinaryImageId: res.info.cloudinaryImageId
                }
            })
            setResList(resData);
            setFilteredResList(resData);
        }
        fetchData();
    }, []);
    return resList.length === 0 ? <ShimmerComponent /> : (
        <div className="body">
            <div className='filter'>
                <input type="text"  value={searchText} onChange={(e) => {
                    setSearchText(e.target.value);
                }}/>
                <button className="search-btn" onClick={()=> {
                    const filteredRestaurant = resList.filter((res) => res.name.includes(searchText))
                    setFilteredResList(filteredRestaurant)
                }}> Search</button>
                <button onClick={() => {
                    const filteredList = resList.filter((res) => res.star > 4)
                    setFilteredResList(filteredList)
                }}> Filter restaurants
                </button>
            </div>
            <div className="restaurantContainer">
                {
                    filteredResList.map((res, index) => <Link to={"/restaurant/"+res.id}><RestaurantCard key={res.id} resData={res}/> </Link>)
                }
            </div>
        </div>
    )
}
