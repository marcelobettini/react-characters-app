//importamos PropTypes para documentar el componente, recordamos que sin
//esto funciona igual... pero es mejor documentar
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";

//Como envié en Characters el objeto character desestructurado, recibo
//las props que me interesan solamente
const Character = ({ id, name, image, status, species, gender }) => {
  return (
    <Card className="p-2 my-2" style={{ width: "18rem" }}>
      <Card.Img src={image} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

/*--------
Prop Types
----------*/
//Esta es la versión para holgazanes
/* Characters.propTypes = {
    characters: PropTypes.instanceOf(Array)
} */

//Esto es super detallado.
Character.propTypes = {
  character: PropTypes.shape({
    created: PropTypes.string,
    gender: PropTypes.string,
    id: PropTypes.number,
    species: PropTypes.string,
    status: PropTypes.string,
  }),
};

export default Character;
