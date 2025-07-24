import axios from "axios";

export const BASE_URL = "http://localhost:3000";

export async function fetchPlaces() {
  try {
    const res = await axios.get(`${BASE_URL}/places`);
    return res.data.places;
  } catch (error) {
    if (error.response?.status === 404) {
      throw new Error("404");
    }
    console.error(error);
    throw error;
  }
}
