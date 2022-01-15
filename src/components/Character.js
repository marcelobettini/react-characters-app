import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";
import Status from "./Status";
import "./Character.css";

//como enviamos desde Characters el objero character desestructurado, recibo
//las props que me interesan solamente

const Character = ({ name, image, status, species, gender}) => {
  return (
    <Card
      className="card p-2 my-2 shadow text-center"
      style={{ width: "18rem" }}
    >
      <Card.Title>{name}</Card.Title>
      <div className="img-container">
        <Card.Img variant="top" src={image} alt={name} />
      </div>
      <Card.Body className="body">
        <Status status={status}/>
        <Card.Text>Species: {species}</Card.Text>
        <Card.Text>Gender: {gender}</Card.Text>
<div className="btn-container">

        <Button variant="primary" className="btn">Go somewhere</Button>
        </div>
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
