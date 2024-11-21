import { useEffect, useState } from "react";
import { fetchMeals } from "../api/api";
import MealItem from "./MealItem";

const Meals = () => {
  const [loadedMeals, setLoadedMeals] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    const getMeals = async () => {
      setIsloading(true);
      try {
        const meals = await fetchMeals();
        setLoadedMeals(meals);
        setIsloading(false);
      } catch (error) {
        throw new Error(error.message);
      }
    };

    getMeals();
  }, []);

  return (
    <>
      {isLoading ? (
        <p>Fetch meals,please wait!</p>
      ) : (
        <ul id="meals">
          {loadedMeals.map((meal) => (
            <MealItem key={meal.id} meal={meal} />
          ))}
        </ul>
      )}
    </>
  );
};

export default Meals;
