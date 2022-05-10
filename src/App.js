//importamos bootstrap para suplementar a react-boostrap
//por supuesto, antes hicimos npm i bootstrap@latest
import "bootstrap/dist/css/bootstrap.min.css";
import { useFetch } from "./hooks/useFetch";
import { useState } from "react";
import { Button } from "react-bootstrap";

import Characters from "./components/Characters";
import Loading from "./components/Loading";
import "./App.css";
import Search from "./components/Search";
import Pages from "./components/Pages";
import Filter from "./components/Filter";
function App() {
  const [endpoint, setEndpoint] = useState("character");
  // const [data, loading, error] = useFetch(endpoint);esto era vector sin reducers
  const { data, loading, error } = useFetch(endpoint); //ahora state es objeto
  const { results: characters, info } = data;
  // recibe desde Search un character y actualiza el endpoint con esa info
  //cuando se actualiza endpoint se dispara el custom hook que hace el fetch
  const findCharacter = (character) => {
    setEndpoint(`character?name=${character}`);
  };
  const nextPage = () => {
    if (info.next != null) {

      setEndpoint(info.next)
    }
  }
  const prevPage = () => {
    if (info.prev != null) {
      setEndpoint(info.prev)
    }
  }
  if (loading) return <Loading />;
  if (error) return (
    <div className="d-grid justify-content-center">

      <h3 className="mt-5">Oh snaps! There was an error 😫 </h3>
      <Button className="btn-lg mt-3" onClick={() => setEndpoint("character")}>Home</Button>
    </div>
  );
  return (
    <>
      <Search findCharacter={findCharacter} loading={loading} />
      <Filter setEndpoint={setEndpoint} />
      <Characters characters={characters} />
      <Pages prevPage={prevPage} nextPage={nextPage} before={data.info.prev} after={data.info.next} />
    </>
  );
}
export default App;
