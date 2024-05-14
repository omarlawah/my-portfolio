import { Col, Container, Row } from "react-bootstrap";
import axios from 'axios';
import { useState } from "react";

const Form = () => {
    const [loading, setLoading] = useState(false);
    // const [ msg,setMsg] = useState("");
    const [formBody, setFormBody] = useState({
        name:"",
        email:"",
        message:""
    });
    // Handles input changes for form fields
    const handleChange = (e)=>{
        setFormBody({
            ...formBody,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async(e)=>{
        e.preventDefault();
        try{
            setLoading(true);
            await axios.post('http://localhost:8000/Form/submit',formBody).then(()=>{
                setLoading(false);
            });
            setFormBody({
                name:"",
                email:"",
                message:""
            })
            alert("form submitted successfully");
        }catch(err){
            console.log(err.message);
        }
    }
    return ( 
        <>
            <Container className="form-container" fluid>
                <Row>
                    <Col>
                        <form method="POST"  onSubmit={handleSubmit}>
                            <div className="input-field">
                                <label>Name</label><br/>
                                <input
                                 onChange={handleChange}
                                 type="text"
                                 value={formBody.name}
                                autoComplete="off" 
                                name="name" 
                                required/>
                            </div>
                            <div className="input-field">
                                <label>Email</label><br/>
                                <input
                                onChange={handleChange} 
                                type="email" 
                                value={formBody.email}
                                name="email" 
                                required 
                                placeholder="Example@mail.com"/>
                            </div>
                            <div className="input-field">
                                <label>Message</label><br/>
                                <textarea 
                                onChange={handleChange}
                                value={formBody.message}
                                required 
                                autoComplete="off" 
                                name="message"/>
                            </div>
                            <div className="button-row">
                                <button className="btn-submit" type="submit" disabled={loading}>
                                    {loading?<span className="loader">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </span>:"Submit"}
                                </button>
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