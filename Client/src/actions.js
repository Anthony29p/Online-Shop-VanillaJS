import axios from 'axios';
// import { apiUrl } from './config';
// const apiUrl ="https://online-shop-vanillajs.herokuapp.com"
const apiUrl ="http://localhost:3001"
export const getProducts = async ({ searchKeyword,filterKeyword}) => {
  try {
    let queryString = '';
    if (searchKeyword) queryString += `?name=${searchKeyword}&`;
    
    if (filterKeyword) queryString += `?category=${filterKeyword}&`;



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


export const getCategory = async () => {
  try {
    const response = await axios({
      url: `${apiUrl}/categories`,
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