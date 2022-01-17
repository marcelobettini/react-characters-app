import { memo, useState } from "react";
//documentar componente
import PropTypes from "prop-types";
//React-Bootstrap
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  FormControl,
} from "react-bootstrap";

const Search = ({ findCharacter, loading }) => {
  //estado (input controlado)
  const [character, setCharacter] = useState("");
  const getCharacters = (e) => {
    e.preventDefault();
    loading = true;
    findCharacter(character);
  };

  return (
    <Container>
      <Row className="justify-content-center my-4 text-center">
        <Col xs={9} md={7} lg={5}>
          <Form onSubmit={getCharacters}>
            <FormGroup>
              <Form.Label htmlFor="search">Search characters... &lt;Enter&gt; fetch all</Form.Label>
              <FormControl
                
                onChange={(e) => setCharacter(e.target.value)}
                value={character}
                name={character}
                id="search"
              />
              {/* con value y name hacemos que el input sea controlado por el estado.

*/}
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
//documentamos: decimos que Search recibe findCharacter, de tipo func y obligatoria
Search.propTypes = {
  findCharacter: PropTypes.func.isRequired,
};
export default memo(Search);
