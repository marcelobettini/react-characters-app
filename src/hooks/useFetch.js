//esto no es un componente en sentido estricto sino una función
//recuerde que el componente es una función que retorna
//algún elemento...
import { useEffect, useState, useCallback } from "react";
import { API } from "../API";

export const useFetch = (endpoint) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getData = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await API.get(endpoint);
      setData(data);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    } catch (error) {
      console.error(error);
      setError(true);
    }
  }, [endpoint]);

  useEffect(() => {
    getData(endpoint);
  }, [endpoint, getData]);
  return [data, loading, error];
};
