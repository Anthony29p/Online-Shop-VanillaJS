import {parseRequestURL} from '../utils.js'

import { getCategory} from '../actions.js';


const Header = {
  render: async () => {
    const { value,category } = parseRequestURL();
    const categories = await getCategory();
    return ` 
  <div class="brand">
    <a href="/#/">Online Shop</a>
  </div>
  <div class="search">
  <form class="search-form"  id="search-form">

    <select id="f">
      <option className="text-center" value="All">
      Seleccione su Category
      </option>
      ${categories.map((c) =>`
      <option value=${c.id}>${c.name}</option>
      `)}
    </select>

    <input type="text" name="q" id="q" value="${value || ''}" /> 
    <button type="submit">Buscar</button>
  </form>        
  </div>
  `;
  },
  after_render: () => {
    document
      .getElementById('search-form')
      .addEventListener('submit', async (e) => {
        e.preventDefault();
        const searchKeyword = document.getElementById('q').value;
        const filterKeyword = document.getElementById('f').value;
        document.location.hash = `/?q=${searchKeyword}?f=${filterKeyword}`;

      });
  },
};
export default Header;
