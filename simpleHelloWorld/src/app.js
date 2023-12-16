import React from "react";
import ReactDOM from "react-dom/client";
import {HeaderComponent} from "./components/header.ts.tsx";
import {RestaurantContainer} from "./components/restraunt-card-container";
import {SearchComponent} from "./components/search.ts.tsx";

const AppComponent = () => {
    return (
        <div className="app">
            <HeaderComponent />
            <RestaurantContainer />
        </div>

    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppComponent />);