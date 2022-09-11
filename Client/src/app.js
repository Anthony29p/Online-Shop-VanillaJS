import Home from './screens/Home.js'
import Product from './screens/Product.js'

const routes = {
    '/': Home,
    '/product/:id':Product,
}


const router = () =>{
    const main =document.getElementById("main-container");
    main.innerHTML = Home.render();
}

window.addEventListener('load',router);