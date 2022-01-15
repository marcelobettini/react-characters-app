//importamos bootstrap para suplementar a react-boostrap
//por supuesto, antes hicimos npm i bootstrap@latest
import "bootstrap/dist/css/bootstrap.min.css";
import { useFetch } from "./hooks/useFetch";
import { useState } from "react";

import Characters from "./components/Characters";
import Loading from "./components/Loading";
import "./App.css";
import Search from "./components/Search";
import Pages from "./components/Pages"
function App() {
  const [endpoint, setEndpoint] = useState("character");
  const [data, loading, error] = useFetch(endpoint);
  const { results: characters, info } = data;
  // recibe desde Search un character y actualiza el endpoint con esa info
  //cuando se actualiza endpoint se dispara el custom hook que hace el fetch
  const findCharacter = (character) => {
    setEndpoint(`character?name=${character}`);
  };
  const nextPage=()=>{
    if(data.info.next != null){

      setEndpoint(data.info.next)
    }
  }
  const prevPage=()=>{
    if(data.info.prev != null){
      setEndpoint(data.info.prev)
    } 
  }
  console.log(loading);
  if (loading) return <Loading />;
  if (error) return <h3>Oh snaps! There was an error 😫</h3>;
  return ( 
    <>
      <Search findCharacter={findCharacter} loading={loading} />
      <Characters characters={characters} />
      <Pages prevPage={prevPage} nextPage={nextPage} before={data.info.prev} after={data.info.next}/>
    </>
  );
}
export default App;
