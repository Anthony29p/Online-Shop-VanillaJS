import { getProducts } from '../actions.js';
import {parseRequestURL} from '../utils'

const Home={
    render: async () => {

        const { value } = parseRequestURL();
        const products = await getProducts({ searchKeyword: value });

        return `
        <ul class="products">
            ${products.map(
                (product) =>`
               <li>
                    <div class="product">
                        <a href="/#/product/${product.id}">
                            <img src="${product.url_image}" alt="${product.name}"/>
                        </a>
                        <div class="product-name">
                            <a href="/#/product/${product.id}">
                                ${product.name}
                            </a>
                        </div>
                        <div class="product-brand">
                            ${product.category}
                        </div>
                        <div class="product-price">
                            $${product.price}
                        </div>
                    </div>
               </li> 
            `)
        .join('\n')}
        </ul>`
    }
}

export default Home;