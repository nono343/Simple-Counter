//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
let num = 0;
let num2 = 0;
let num3 = 0;

// setInterval(FUNCION, TIEMPO)
setInterval(function() {
    num++;
    if (num === 10) {
        num = 0;
        num2++;
        if (num2 === 10) {
            num2 = 0;
            num3++;
        }
    }
    ReactDOM.render(<Home segundo={num} minuto={num2} hora={num3} />, document.querySelector("#app"));
}, 1000);

