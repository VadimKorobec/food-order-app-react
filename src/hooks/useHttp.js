import { useState } from "react";

const sendHttpRequest = async (url, config) => {
  const response = await fetch(url, config);

  const resData = await response.json();

  if (!response.ok) {
    throw new Error(
      resData.message || "Something went wrong, failed to send request."
    );
  }

  return resData;
};

export const useHttp = () => {
  const [isLoading,setIsLoading] = useState(false)
  const [error, setError] = useState();

  const sendRequest = async () => {
    setIsLoading(true)
    try {
      const resData = sendHttpRequest();
    } catch (error) {
      setError(error.message || "something went wrong");
    }
    setIsLoading(false)
  };
};
