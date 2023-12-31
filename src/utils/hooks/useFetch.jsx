import { useCallback, useState } from 'react';

const useFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const request = useCallback(async (url, options) => {
    let response;
    let json;

    try {
      setError(null);
      setIsLoading(true);

      response = await fetch(url, options);
      json = await response.json();

      if (response.ok === false) throw new Error(json.message);
    } catch (error) {
      json = null;
      setError(error.message);
      setIsLoading(false);
    } finally {
      setData(json);
      setIsLoading(false);
      return { response, json };
    }
  }, []);

  return { data, isLoading, error, request };
};

export default useFetch;
