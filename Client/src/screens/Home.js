import { getProducts } from '../actions.js';
import {parseRequestURL} from '../utils.js'

const Home={
    render: async () => {

        const { value,category } = parseRequestURL();
        const products = await getProducts({ searchKeyword: value,filterKeyword: category });

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
                            ${product.categoryName}
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