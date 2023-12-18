import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import {HeaderComponent} from "./components/Header.ts.tsx";
import {RestaurantContainer} from "./components/RestaurantList.tsx";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import {About} from "./components/About.ts";
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

const ContactUs = lazy(() => import("./components/ContactUs.ts"));
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
        element: <Suspense fallback={<h2>Loading ....</h2>}><ContactUs /></Suspense>
    },{
        path: '/restaurant/:resId',
        element: <RestaurantMenu />
    },],
    errorElement: <Error />
},])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);