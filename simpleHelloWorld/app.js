import React from "react";
import ReactDOM from "react-dom/client";
const header = React.createElement("h1", {id: "header"}, "Hello world from React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(header);