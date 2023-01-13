import axios from 'axios';
import { BASE_URL } from '../constant';

export const requestNeighborhood = async () => {
  try {
    return await axios.get(`${BASE_URL}/neighborhood`);
  } catch (e) {
    return e;
  }
};
