import {useParams} from 'react-router-dom'
import {ShimmerComponent} from "./Shimmer";
import {useRestraurantMenu} from "../hooks/useRestraurantMenu";
import {Star} from "./Star";
export const RestaurantMenu = () => {
    const {resId}  = useParams();
    const resData = useRestraurantMenu(resId);
    if(resData === {}) {
        return <ShimmerComponent />
    }
    return (
        <div className="">
            <h1 className="p-8 text-5xl text-purple-900 shadow-lg text-center">{resData.name}</h1>
            <h3 className="m-4 text-3xl p-7 text-purple-700" >Cuisines {resData.cuisines?.join( ', ')}</h3>
            <h3 className="m-4 text-2xl p-4 text-green-700" >{resData.costForTwoMessage}</h3>
            <h3 className="m-4 text-2xl p-4 text-green-700" ><Star stars={resData.avgRatings}></Star></h3>
            <br/>
            <br/>
            <h3 className="p-4 text-3xl text-purple-900 shadow-lg text-center"> Menu </h3>
            <div className="border-purple-400">
                <ul className="p-4">
                    {resData.itemCards?.map(({card}) => (
                        <li className="italic p-7 shadow-lg text-left" key={card?.info.id}>{card.info.name}                                     Rs {card.info.price/100}</li>
                    ))}
                </ul>
            </div>

        </div>
    )
}