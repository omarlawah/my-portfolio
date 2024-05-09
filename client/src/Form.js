import { Col, Container, Row } from "react-bootstrap";

const Form = () => {
    return ( 
        <>
            <Container className="form-container" fluid>
                <Row>
                    <Col>
                        <form method="POST">
                            <div className="input-field">
                                <label>Name</label><br/>
                                <input type="text" name="name" required/>
                            </div>
                            <div className="input-field">
                                <label>Name</label><br/>
                                <input type="email" name="email" required placeholder="Example@mail.com"/>
                            </div>
                            <div className="input-field">
                                <label>Message</label><br/>
                                <textarea required name="message"/>
                            </div>
                            <div className="button-row">
                                <button className="btn-submit" type="submit">Submit</button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        </>
     );
}
 
export default Form;
<>
    <Container fluid>
        <Row>
            <Col></Col>
        </Row>
    </Container>
</>