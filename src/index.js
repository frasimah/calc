import './polyfills.js'
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import App from './App.js';
import { hydrate, render } from "react-dom";


const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(
    <App />,
    rootElement);

} else {
  render(
    <App />,
    rootElement);
}
