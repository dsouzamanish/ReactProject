import {Star} from "./Star.tsx";

export const RestaurantCard = ({resData}) => {

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

export const withPromotedRestaurantCard = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-purple-700 text-white m-4 p-2 rounded-l rounded-r">Promoted</label>
                <RestaurantCard {...props}/>
            </div>

        )
    }
}
