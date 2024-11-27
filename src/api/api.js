export const API_URL = "http://localhost:3000";

export const fetchMeals = async () => {
  const response = await fetch(`${API_URL}/meals`);

  if (!response.ok) {
    throw new Error("Failed fetch");
  }

  const resData = await response.json();

  return resData;
};
