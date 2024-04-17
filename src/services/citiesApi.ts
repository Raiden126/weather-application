import axios from 'axios';

const CITIES_API_URL = 'https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?limit=20';

export const fetchCitiesData = async () => {
  try {
    const response = await axios.get(CITIES_API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching cities data:', error);
    throw new Error('Failed to fetch cities data');
  }
};
