import {useState, useEffect} from 'react';
import {ShimmerComponent} from "./Shimmer.tsx";
import {Link} from "react-router-dom";
import {useRestraurantCard} from "../hooks/useRestaurantCards.ts.tsx";
import { RestaurantCard, withPromotedRestaurantCard } from './RestaurantCard.ts.tsx';

const RestrauntCardPromoted = withPromotedRestaurantCard(RestaurantCard);

export const RestaurantContainer = () => {
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
                    let filteredRestaurant = resList;
                    if(searchText) {
                        filteredRestaurant = resList.filter((res) => res.searchName.includes(searchText.toLowerCase()))
                        setFilteredResList(filteredRestaurant)
                    } else {
                        setFilteredResList(filteredRestaurant)
                    }
                }}> Search</button>
                <button className="shadow-lg p-4 m-4 rounded-xl border-solid border-purple-700 bg-purple-300 bg-purple-300" onClick={() => {
                    const filteredList = resList.filter((res) => res.star > 4)
                    setFilteredResList(filteredList)
                }}> Filter restaurants
                </button>
            </div>
            <div className="flex flex-wrap">
                {

                    filteredResList.map((res, index) => <Link key={res.id} to={"/restaurant/"+res.id}>{ res.promoted? <RestrauntCardPromoted resData={res} /> : <RestaurantCard resData={res}/>}</Link>)
                }
            </div>
        </div>
    )
}
