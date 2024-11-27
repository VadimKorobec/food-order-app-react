const sendHttpRequest = async (url, config) => {
  const response = await fetch(url, config);

  if (!response.ok) {
    throw new Error("");
  }
};

export const useHttp = () => {};
