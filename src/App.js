//importamos bootstrap para suplementar a react-boostrap
//por supuesto, antes hicimos npm i bootstrap@latest
import "bootstrap/dist/css/bootstrap.min.css";
import { useFetch } from "./hooks/useFetch";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Characters from "./components/Characters";
import Loading from "./components/Loading";
import "./App.css";

function App() {
  const [endpoint, setEndpoint] = useState("character");
  const [data, loading, error] = useFetch(endpoint);
  const { results: characters, info } = data;
  if (loading) return <Loading />;
  if (error) return <h3>Oh snaps! There was an error 😫</h3>;
  return (
    <Container>
      <Row>
        <Characters characters={characters} />;
      </Row>
    </Container>
  );
}
export default App;
