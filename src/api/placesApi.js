import axios from "axios";

export const BASE_URL = "http://localhost:3000";

export async function fetchPlaces() {
  try {
    const res = await axios.get(`${BASE_URL}/places`);
    return res.data.places;
  } catch (error) {
    console.error(error);
    return [];
  }
}
