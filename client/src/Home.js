import {Container, Row, Col} from 'react-bootstrap';
const Home = () => {
    return (
        <div  className="home-container"> 
            <Container fluid className="home-content"> 
                <Row id='intro'>
                    <Col>
                        <p><span>Welcome to my portfolio!<br/></span>As a passionate web developer, I specialize 
                         in crafting engaging and functional web experiences. With a keen eye for design and a commitment
                         to clean code, I strive to bring ideas to life through innovative solutions. Explore my projects
                          below to see how I can help elevate your online presence.</p>
                    </Col>
                </Row>
            </Container>
        </div>
     );
}
 
export default Home;