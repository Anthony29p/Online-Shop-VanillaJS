import Home from './screens/Home.js'
import Product from './screens/Product.js'
import Error404 from './screens/Error404.js'
import {parseRequestURL} from './utils.js'

import Header from './components/Header.js'

import './styles/style.css'

const routes = {
    '/': Home,
    '/product/:id':Product,
}


const router = async() =>{
    const request = parseRequestURL();
    const parseURL = 
        (request.resource?`/${request.resource}`:'/')+
        (request.id?'/:id':'')
    const screen = routes[parseURL]?routes[parseURL]:Error404
    const main =document.getElementById("main-container");
    main.innerHTML = await screen.render();

    const header = document.getElementById('header-container');
    header.innerHTML = await Header.render();
    Header.after_render(); 

    console.log(request)

}

window.addEventListener('load',router);
window.addEventListener('hashchange',router)

