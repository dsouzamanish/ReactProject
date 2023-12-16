import React from "react";
import ReactDOM from "react-dom/client";
import {HeaderComponent} from "./components/Header.ts.tsx";
import {RestaurantContainer} from "./components/RestaurantCard";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import {About} from "./components/About.ts";
import {ContactUs} from "./components/ContactUs.ts";
import {Error} from "./components/Error.ts";
import {RestaurantMenu} from "./components/RestaurantMenu.ts";

const AppComponent = () => {
    return (
        <div className="app">
            <HeaderComponent />
            <Outlet />
        </div>

    )
}


const router = createBrowserRouter([{
    path: '/',
    element: <AppComponent />,
    children:[{
        path: "/",
        element: <RestaurantContainer />
    }, {
        path: '/about',
        element: <About />
    },{
        path: '/contact',
        element: <ContactUs />
    },{
        path: '/restaurant/:resId',
        element: <RestaurantMenu />
    },],
    errorElement: <Error />
},])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);