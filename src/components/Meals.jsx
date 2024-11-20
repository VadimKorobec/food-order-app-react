import { useEffect, useState } from "react";
import { fetchMeals } from "../http";

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
            <li key={meal.id}>
              <img src={meal.image} alt={meal.name} />
              <h2>{meal.name}</h2>
              <p>{meal.description}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Meals;
