import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const FETCHED = 'spacetraveller/rockets/fetchAPI';
const RESERVED = 'spacetraveller/rockets/reserved';
const UNRESERVED = 'spacetraveller/rockets/notReserved';
const url = 'https://api.spacexdata.com/v4/rockets';

const rocketsReducer = (state = [], actions) => {
  switch (actions.type) {
    case 'spacetraveller/rockets/fetchAPI/fulfilled':
      return actions.payload;
    case RESERVED:
      return state.map((rocket) => {
        if (rocket.id !== actions.payload) return rocket;
        return { ...rocket, reserved: true };
      });
    case UNRESERVED:
      return state.map((rocket) => {
        if (rocket.id !== actions.payload) return rocket;
        return { ...rocket, reserved: false };
      });
    default:
      return state;
  }
};

export default rocketsReducer;

export const fetchAPI = createAsyncThunk(FETCHED, async () => {
  const dataApi = await axios.get(url);
  const ans = dataApi.data;
  return ans.map((item) => ({
    id: item.id,
    name: item.name,
    description: item.description,
    first_flight: item.first_flight,
    wiki: item.wikipedia,
    flickr_images: item.flickr_images.map((y) => y),
  }));
});

export const reserved = (payload) => ({ type: RESERVED, payload });
export const notReserved = (payload) => ({ type: UNRESERVED, payload });
