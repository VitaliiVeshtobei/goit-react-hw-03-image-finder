import axios from 'axios';

export const getApi = async () => {
  const BASE_URL = 'https://pixabay.com/api/';
  const params = {
    key: '29558697-85a489dc53885da2ee650bf34',
    q: `dog`,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page: `${1}`,
    per_page: '12',
  };

  const resolve = await axios(BASE_URL, { params });

  return resolve.data;
};
