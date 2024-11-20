import axios from "axios";

const path = "http://localhost:3000";

export const fetchMeals = async () => {
  try {
    const response = await axios.get(`${path}/meals`);

    if (response.status < 200 || response.status >= 300) {
      throw new Error("Failed to fetch meals");
    }
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch meals");
  }
};
