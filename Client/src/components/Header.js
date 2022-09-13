import {parseRequestURL} from '../utils.js'

const Header = {
  render: () => {
    const { value } = parseRequestURL();
    return ` 
  <div class="brand">
    <a href="/#/">Online Shop</a>
  </div>
  <div class="search">
  <form class="search-form"  id="search-form">
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
        document.location.hash = `/?q=${searchKeyword}`;
      });
  },
};
export default Header;
