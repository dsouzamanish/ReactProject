import {useState, useEffect} from 'react';
import {ShimmerComponent} from "./Shimmer";
import {Link} from "react-router-dom";
import {Star} from "./Star";
import {useRestraurantCard} from "../hooks/useRestaurantCards.ts";

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
    const [searchText, setSearchText] = useState();
    const [filteredResList, setFilteredResList] = useState([]);

    const {resList} = useRestraurantCard();
    useEffect(() => {
        setFilteredResList(resList)
    }, [resList]);

    return filteredResList.length === 0 ? <ShimmerComponent /> : (
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
                    filteredResList.map((res, index) => <Link key={res.id} to={"/restaurant/"+res.id}><RestaurantCard  resData={res}/> </Link>)
                }
            </div>
        </div>
    )
}
