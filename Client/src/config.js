require('dotenv').config();

const {API} = process.env;

export const apiUrl = document.location.href.startsWith('http://localhost')
  ? 'http://localhost:3001'
  : API;
