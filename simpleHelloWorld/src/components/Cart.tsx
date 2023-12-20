import {MenuItem} from "./RestaurantMenuCategory";
import {useDispatch, useSelector} from "react-redux";
import {clearCart} from "../store/cart.slice";

export  const Cart = () => {
    const dispatcher = useDispatch();
    const items = useSelector((store)=> store.cart.items)
    return items.length === 0 ? (<div className="text-center p-4 m-4 text-purple-900">
        Cart is empty
    </div>) : (<div className="text-center">
        <h1> Cart</h1>
        <button className="bg-purple-900 rounded-xl text-white p-2 text-xs m-4" onClick={() => {
            dispatcher(clearCart())
        }}>clear cart
        </button>
        <div className="m-2 p-2 w-6/12 m-auto">
            {
                items.map((item) => (
                    <MenuItem key={item.id} item={item} insideCart={true}/>
                ))
            }
        </div>
    </div>)
}

