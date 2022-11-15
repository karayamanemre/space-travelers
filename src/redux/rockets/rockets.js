import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const FETCHED = 'spacetraveller/rockets/fetchAPI';
const url = 'https://api.spacexdata.com/v3/rockets';

const rocketsReducer = (state = [], actions) => {
  switch (actions.type) {
    case 'spacetraveller/rockets/fetchAPI/fulfilled':
      return actions.payload;
    default:
      return state;
  }
};

export default rocketsReducer;

export const fetchAPI = createAsyncThunk(FETCHED, async () => {
  const dataApi = await axios.get(url);
  const ans = dataApi.data;
  console.log('helossa', ans);
  return ans.map((item) => ({
    id: item.id,
    name: item.rocket_name,
    type: item.rocket_type,
    flickr_images: item.flickr_images.map((y) => y),
  }));
});
