import Character from "./Character";
import PropTypes from "prop-types";
const Characters = ({ characters }) => {
  return (
    //La primera sentencia es para chequear que los datos hayan llegado
    <>
      {characters?.length &&
        characters.map((character) => (
          <Character key={character.id} {...character} />
        ))}
    </>
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
      created: PropTypes.string,
      gender: PropTypes.string,
      id: PropTypes.number,
      name: PropTypes.string,
      species: PropTypes.string,
      status: PropTypes.string,
    }).isRequired
  ),
};
