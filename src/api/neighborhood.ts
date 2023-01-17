import axios from 'axios';
import { BASE_URL } from '../constant';

const accessToken =
  'eyJhbGciOiJIUzM4NCJ9.eyJhdWQiOiLsmYDtlIztl4zthLAiLCJzdWIiOiJmbHVlbnRtaW5AZ21haWwuY29tIiwiaXNzIjoid2FmZmxlLWRhYW5nbiIsImV4cCI6MTY3Mzc5Mjg2NSwiaWF0IjoxNjczNzg5MjY1fQ.3LxI6OvoLIQ7FnclL3MbhhTtIpIy6Sm9rn5BJZZnNkZdt70w2IUvmTDaWYqmtqBT';

export const requestNeighborhood = async () => {
  try {
    return await axios.get(`${BASE_URL}/neighborhood`, {
      headers: { Authorization: accessToken },
    });
  } catch (e) {
    return e;
  }
};
