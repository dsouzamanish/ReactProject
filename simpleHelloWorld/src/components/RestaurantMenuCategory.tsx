import {useState} from 'react'
export const MenuItem = ({item}) => {
    const {name, price, description, id, imageId, isVeg} = item
    return ( <div className="p-2 m2 border-b-4 w-auto">
        <div className="text-purple-900 flex justify-between">
            <h1>{name}</h1>
            <h2 className="text-xs italic"> {isVeg ? "Veg" : "Non-veg"}</h2>
            <h2> ₹ {price / 100}</h2>
        </div>
        <div className="flex flex-wrap justify-between">
            <div>
                <img className="p-2 rounded-2xl w-24"
                         src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_150,h_150/" + imageId}/>
            </div>
            <div>
                <h3 className="text-xs italic py-6 flex-wrap">{description}</h3>
            </div>
        </div>
    </div>)
}

export const RestaurantMenuCategory = ({categoryMenu}) => {
    const {title, itemCards} = categoryMenu;
    const [isHiddenItems, setIsHiddenItems] = useState(true)

    return (
        <div>
            <div className="flex justify-center">
                <div></div>
                <div className="w-1/3 p-4 shadow-lg border-t-1 border-b-4 rounded-xl">
                    <h2 className="font-bold text-blue-800 m-4" onClick={() => {
                        setIsHiddenItems(!isHiddenItems)
                    }}>{title}</h2>
                    <div className="m-2 p-2">
                        {
                            !isHiddenItems ? (itemCards.map(({card}) => (
                                <MenuItem key={card.info.id} item={card.info}/>
                            ))) : <div></div>
                        }
                    </div>
                </div>
                <div></div>
            </div>

        </div>
    );
};