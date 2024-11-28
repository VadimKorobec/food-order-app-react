import { useHttp } from "../hooks/useHttp";
import MealItem from "./MealItem";

const requestConfig = {}

const Meals = () => {
  const { data, isLoading, error } = useHttp(
    "http://localhost:3000/meals",
    requestConfig,
    []
  );

  if (isLoading) {
    return <p className="center">Fetching meals...</p>
  }

  return (
    <ul id="meals">
      {data.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
};

export default Meals;
