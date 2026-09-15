import { createRoot } from "react-dom/client"; 
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
// import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./main-component/App/App";
import "swiper/css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/fontawesome.css";
import "./css/themify-icons.css";
import "./css/animate.css";
import "./css/mousecursor.css";
import "./css/imageRevealHover.css";
import "./css/custom-fonts.css";
import "./css/main.css"


// const rootElement = document.getElementById("root") as HTMLElement;
// const root = ReactDOM.createRoot(rootElement);
// const root = createRoot(document.getElementById("root"));

// root.render(
//   <React.StrictMode>
//       <App />
//   </React.StrictMode>
// );

// root.render(
//    <App />
// );


const container = document.getElementById('root');

if (!container) {
  throw new Error("Failed to find the root element. Ensure <div id='root'></div> exists in your index.html");
}

const root = createRoot(container);
root.render(<App />);
