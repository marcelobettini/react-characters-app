import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";
import "./Character.css";

//como enviamos desde Characters el objero character desestructurado, recibo
//las props que me interesan solamente

const Character = ({ name, image, status, species, gender, created }) => {
  return (
    <Card
      className="card p-2 my-2 shadow text-center"
      style={{ width: "18rem" }}
    >
      <Card.Title>{name}</Card.Title>
      <div className="img-container">
        <Card.Img className="char-img" variant="top" src={image} alt={name} />
      </div>
      <Card.Body className="body">
        <Card.Text>Status: {status}</Card.Text>
        <Card.Text>Species: {species}</Card.Text>
        <Card.Text>Gender: {gender}</Card.Text>
        <Card.Text>Created: {created}</Card.Text>

        <Button variant="primary" className="btn">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

/*--------
PropTypes
---------*/
/* versión holgazana
Character.propTypes = {
    character: PropTypes.instanceOf(Array)
}
*/
Character.propTypes = {
  character: PropTypes.shape({
    created: PropTypes.string,
    gender: PropTypes.string,
    name: PropTypes.string,
    species: PropTypes.string,
    status: PropTypes.string,
  }),
};

export default Character;
