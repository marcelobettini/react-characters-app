//esto no es un componente en sentido estricto sino una función
//recuerde que el componente es una función que retorna
//algún elemento...
import { useEffect, useCallback, useReducer } from "react";
import { ACTIONS } from "../actions/fetch";
import { API } from "../API";
import { fetchReducer, initialState } from "../reducers/fetch";

export const useFetch = (endpoint) => {
  // const [data, setData] = useState({});
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);
  /*el arreglo es posicional, los nombres son convencionales, useReucer recibe
  el reducer en sí mismo, donde va a modificar este estado... en fetchReducer y 
  el segundo parámetro es el estado inicial */
  const [state, dispatch] = useReducer(fetchReducer, initialState)
  const getData = useCallback(async () => {
    try {
      // setLoading(true);
      const { data } = await API.get(endpoint);
      //dispatch es un método que nos va a permitir actualizar el reducer mediante
      //acciones, no tengo que recordar setters... O sea, tengo un setter global.
      //¿cómo se usa?
      dispatch({ type: ACTIONS.SET_DATA, payload: data })
      /* setData(data);
      setLoading(false); */

    } catch (error) {
      console.error(error)
      // setError(true);
      dispatch({ type: ACTIONS.SET_ERROR })
    }
  }, [endpoint]);

  useEffect(() => {
    getData(endpoint);
  }, [endpoint, getData]);
  // return [data, loading, error]; VECTOR
  return state //OBJETO
};
