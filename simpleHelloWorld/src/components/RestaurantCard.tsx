import {useState, useEffect} from 'react';
import {ShimmerComponent} from "./Shimmer";
import {Link} from "react-router-dom";
import {Star} from "./Star";
import {useRestraurantCard} from "../hooks/useRestaurantCards.ts";

const RestaurantCard = ({resData}) => {

    return (<div className="p-7 m-10 border border-solid bg-purple-200 max-w-fit max-h-{300px} flex-wrap justify-center text-center">
        <div>
            <img className="rounded-xl"
                 src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300/"+resData.cloudinaryImageId} />
        </div>
        <h3 className="m-4 text-purple-900">{resData.name}</h3>
        <h3 className="flex-wrap">{resData.cuisines}</h3>
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
            <div className='p-7'>
                <input type="text"  className="shadow-lg p-4 focus:ring-violet-300 active:bg-violet-300 border-purple-400 rounded-xl border border-solid" value={searchText} onChange={(e) => {
                    setSearchText(e.target.value);
                }}/>
                <button className="shadow-lg p-4 m-4 rounded-xl border-solid border-purple-700 bg-purple-300" onClick={()=> {
                    const filteredRestaurant = resList.filter((res) => res.name.includes(searchText))
                    setFilteredResList(filteredRestaurant)
                }}> Search</button>
                <button className="shadow-lg p-4 m-4 rounded-xl border-solid border-purple-700 bg-purple-300 bg-purple-300" onClick={() => {
                    const filteredList = resList.filter((res) => res.star > 4)
                    setFilteredResList(filteredList)
                }}> Filter restaurants
                </button>
            </div>
            <div className="flex flex-wrap">
                {
                    filteredResList.map((res, index) => <Link key={res.id} to={"/restaurant/"+res.id}><RestaurantCard  resData={res}/> </Link>)
                }
            </div>
        </div>
    )
}
