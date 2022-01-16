import { Container, Button } from "react-bootstrap"

const Pages = ({ prevPage, nextPage, before, after }) => {
    let disabledBefore, disabledAfter = false
    before ? disabledBefore = false : disabledBefore = true
    after ? disabledAfter = false : disabledAfter = true
    return (
        <Container className="d-flex justify-content-center my-4">
            
                    <Button className="mx-1" onClick={prevPage} disabled={disabledBefore}>Prev</Button>

                    <Button className="mx-1" onClick={nextPage} disabled={disabledAfter}>Next</Button>
            
        </Container>
    )
}
export default Pages