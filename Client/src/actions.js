import axios from 'axios';
// import { apiUrl } from './config';
const apiUrl ="https://online-shop-vanillajs.herokuapp.com"
export const getProducts = async ({ searchKeyword = '' }) => {
  try {
    let queryString = '?';
    if (searchKeyword) queryString += `name=${searchKeyword}&`;

    const response = await axios({
      url: `${apiUrl}/products${queryString}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.statusText !== 'OK') {
      throw new Error(response.data.message);
    }
    return response.data;
  } catch (err) {
    console.log(err);
    return { error: err.response.data.message || err.message };
  }
};