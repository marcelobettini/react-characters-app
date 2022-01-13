import { memo, useState } from "react";
//documentar componente
import PropTypes from "prop-types";
//React-Bootstrap
import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
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
      <Row className="justify-content-center my-4">
        <Col xs={9} md={7} lg={5}>
          <Form onSubmit={getCharacters}>
            <InputGroup>
              <FormControl
                placeholder="Buscar personaje... <Enter> sin texto busca todos"
                onChange={(e) => setCharacter(e.target.value)}
                value={character}
                name={character}
              />
              {/* con value y name hacemos que el input sea controlado por el estado.

*/}
            </InputGroup>
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
