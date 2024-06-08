import axios from 'axios';
import { api as config } from '../../configs/server.config';

/**
 * getGoatFacts - Gets a list of goat facts from the backend API
 */
export const getGoatFacts = async () => {
  try {
    const res = await axios.get(`http://${config.host}:${config.port}/goats`);
    if (!res.data?.data) {
      throw new Error('Error fetching data');
    }
    return res.data.data;
  }
  catch (e) {
    console.error(e.message);
  }
};
