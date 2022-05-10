import React from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'

function Filter({ setEndpoint }) {
    function handleFilter(status) {
        status === "All" ? setEndpoint("character") :
            setEndpoint("character/?status=" + status.toLowerCase())
    }
    return (
        <Container>
            <Row className="justify-content-center my-4 text-center">
                <Col xs={8} md={7} lg={4}>

                    <Form >
                        <Form.Group>
                            <Form.Label htmlFor='status'>Search by Status</Form.Label>
                            <Form.Select onChange={(e) => handleFilter(e.target.value)} id='status'>
                                <option>Alive</option>
                                <option>Dead</option>
                                <option>Unknown</option>
                                <option>All</option>
                            </Form.Select>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Filter
