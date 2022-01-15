import Character from "./Character";
import PropTypes from "prop-types";
import { Container, Row } from "react-bootstrap";
const Characters = ({ characters }) => {
  return (
    //La primera sentencia es para chequear que los datos hayan llegado
    //?. optional chaining operator ES 2020
    //const user = {name: "Marcelo"}
    //const zip = user.adress.zip
    //clg zip //breaks... cannot read prop of undefined
    //const zip = user?.adress?.zip //
    //clg zip //undefined... doesn't break
    <Container>
      <Row className="d-flex justify-content-evenly">
        {characters?.length &&
          characters.map((character) => (
            <Character key={character.id} {...character} />
          ))}
      </Row>
    </Container>
  );
  //acabo de enviar al componente Character el objeto character ya desestructurado
  //en el componente que reciba esa data, podré tomar las props que me interesen
  //recibiéndolas directamente como params de los argumentos de mi función (componente)
  //Podría enviar character={character} y desestructuraría del otro lado. Pero esto es better.
};
export default Characters;
Characters.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      gender: PropTypes.string,
      id: PropTypes.number,
      name: PropTypes.string,
      species: PropTypes.string,
      status: PropTypes.string,
    }).isRequired
  ),
};
