import axios from 'axios';

// const API_KEY = '6f3a72a470b06bab99f8d69f54b4e2d3';
const BASE_URL = 'https://63e0dbed59bb472a742a7055.mockapi.io/contacts/';

// export const fetchTrendMovies = async (page = 1) => {
//   try {
//     const { data } = await axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${page}`);
//     return data;
//   } catch (error) {
//     console.error(error);
//   }
// };

export const fetchAllContacts = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const findContactsbyName = async searchQuery => {
  try {
    const { data } = await axios.get(`${BASE_URL}:${searchQuery}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const delContactById = async searchQuery => {
  try {
    const { data } = await axios.get(`${BASE_URL}:${searchQuery}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

// export const fetchCast = async searchQuery => {
//   try {
//     const { data } = await axios.get(`${BASE_URL}/movie/${searchQuery}/credits?api_key=${API_KEY}`);
//     // return data;
//     return data.cast;
//   } catch (error) {
//     console.error(error);
//   }
// };

// export const fetchReviews = async searchQuery => {
//   try {
//     const { data } = await axios.get(`${BASE_URL}/movie/${searchQuery}/reviews?api_key=${API_KEY}&page=1`);
//     return data.results;
//   } catch (error) {
//     console.error(error);
//   }
// };
