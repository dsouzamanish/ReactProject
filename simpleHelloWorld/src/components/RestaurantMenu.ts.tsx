import {useParams} from 'react-router-dom'
import {ShimmerComponent} from "./Shimmer";
import {useRestraurantMenu} from "../hooks/useRestraurantMenu";
import {Star} from "./Star";
import {RestaurantMenuCategory} from "./RestaurantMenuCategory";
export const RestaurantMenu = () => {
    const {resId}  = useParams();
    const resData = useRestraurantMenu(resId);
    if(resData === {}) {
        return <ShimmerComponent />
    }
    return (
        <div >
            <div className="text-center border-b-4">
                <h1 className="p-2 text-2xl text-purple-900 ">{resData.name}</h1>
            </div>
            <div className="border-purple-400">
                <ul className="p-4">
                    {resData.menuCategory?.map(({card}) => (
                        <RestaurantMenuCategory key={card?.card?.title} categoryMenu={card?.card}/>
                    ))}
                </ul>
            </div>

        </div>
    )
}