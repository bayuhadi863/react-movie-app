import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'bbfc3d247442212cc74727aa01d49fe6';
const imageLink = 'https://image.tmdb.org/t/p/w500';

const fetchPromise = async (endpoints) => {
  try {
    const promises = endpoints.map(async (endpoint) => {
      const response = await axios.get(endpoint);
      return response.data;
    });
    const data = await Promise.all(promises);
    return data.flat();
  } catch (error) {
    throw new Error('Error fetching data.');
  }
};

const fetchData = async (endpoint, objectKey, func) => {
  try {
    const response = await axios.get(endpoint);
    if (objectKey && func) {
      return func(response.data[objectKey]); // Panggil fungsi func dengan data dari respons API
    } else if (objectKey) {
      return response.data[objectKey];
    } else if (func) {
      return func(response.data);
    } else {
      return response.data;
    }
  } catch (err) {
    throw new Error('Error fetching data.');
  }
};

export { BASE_URL, API_KEY, imageLink, fetchPromise, fetchData };
