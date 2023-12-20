import {useState} from 'react'
import {useDispatch} from "react-redux";
import {addItem, removeItem} from "../store/cart.slice";

export const MenuItem = ({item, insideCart = false}) => {
    const {name, price, description, id, imageId, isVeg} = item;
    const dispatch = useDispatch();
    const handleClick = (item, insideCart = false) => {
        insideCart ? dispatch(removeItem(item)) : dispatch(addItem(item));
;    }
    return ( <div className="p-2 m2 border-b-4 w-auto">
        <div className="text-purple-900 flex justify-between">
            <h1>{name}</h1>
            <h2 className="text-xs italic"> {isVeg ? "Veg" : "Non-veg"}</h2>
            <h2> ₹ {price / 100}</h2>
        </div>
        <div className="flex flex-wrap justify-between">
            <div>
                {
                    imageId ? <img className="p-2 rounded-2xl w-24"
                                   src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_150,h_150/" + imageId}/> :
                        <img
                            src="data:image/jpeg;base64,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"
                            className="p-2 rounded-2xl w-24"/>
                }
            </div>
            <div className="flex flex-wrap">
                <div>
                    <h3 className="text-xs italic py-6">{description}</h3>
                </div>
                <div>
                    {  insideCart ? ( <button
                        className="relative bg-purple-900 rounded-xl text-white p-2 text-xs m-4" onClick={()=> {handleClick(item, true)}}>+remove Item
                    </button>):(<button
                        className="relative bg-purple-900 rounded-xl text-white p-2 text-xs m-4" onClick={() => {
                        handleClick(item)
                    }}>+Add Item
                    </button>)}
                </div>

            </div>
        </div>
    </div>)
}

export const RestaurantMenuCategory = ({categoryMenu, showItems, setShowItems}) => {
    const {title, itemCards} = categoryMenu;

    return (
        <div>
            <div className="flex justify-center">
                <div></div>
                <div className="w-1/3 p-4 shadow-lg border-t-1 border-b-4 rounded-xl">
                    <div className=" flex font-bold text-blue-800 m-4"  onClick={() => {
                        showItems === true ? setShowItems() : setShowItems();
                    }}>
                        <p className="p2" >{title}</p>
                        <p>({itemCards.length})</p>
                    </div>
                    <div className="m-2 p-2">
                        {
                            showItems  ? (itemCards.map(({card}) => (
                                <MenuItem key={card.info.id} item={card.info}  />
                            ))) : <div></div>
                        }
                    </div>
                </div>
                <div></div>
            </div>

        </div>
    );
};