import {Container, Row, Col} from 'react-bootstrap';
import { useState, useEffect } from 'react';
const Home = () => {
    const phrases = ["Welcome to my portfolio!", "I'm a web developer", "I'm a web designer"];
    const [phrase, setPhrase] = useState("");
    let [i, setI] = useState(0);
    useEffect(() => {
        let intervalId = setInterval(() => {
            setPhrase(phrases[i]);
            console.log(i);
            setI(i++); 
            if (i === 3) {
                clearInterval(intervalId);
            }
        }, 1000);
    
        return () => {
            clearInterval(intervalId);
        };
    });

    
   
   

    return (
        <div  className="home-container"> 
            <Container fluid className="home-content"> 
                <Row id='intro'>
                    <Col>
                        <p><span>{phrase}</span><br/>As a passionate web developer, I specialize 
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