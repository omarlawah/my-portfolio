import {Container, Row, Col} from 'react-bootstrap';
import { useState, useEffect } from 'react';



const Home = () => {
   
    const phrases = ["Welcome to my portfolio!", "I'm a web designer", "I'm a web developer"];
    const [phrase, setPhrase] = useState();
    // function to make the intro text change every 0.1 second
    // useEffect(() => {
    //     let phraseIndex = 0;
    //     let letterIndex = 0;
    //     const intervalId = setInterval(() => {
    //         if (letterIndex <= phrases[phraseIndex].length) {
    //             setPhrase(phrases[phraseIndex].slice(0, letterIndex));
    //                 letterIndex++;
    //         } else {
    //             letterIndex = 0;
    //             phraseIndex = (phraseIndex + 1) % phrases.length;
    //         }
    //     }, 100); 

    //     return () => clearInterval(intervalId);
    // }, []);

    return (
        <>
        <div  className="home-container"> 
            <Container fluid className="home-content"> 
                <Row id='intro'>
                    <Col>
                        <p><span>{phrase}</span><br/>As a passionate web developer, I specialize 
                         in crafting engaging and functional web experiences. With a keen eye for design and a commitment
                          below to see how I can help elevate your online presence with clean code, I strive to bring ideas
                           to life through innovative solutions.</p>
                         
                    </Col>
                </Row>
            </Container>
        </div>
       
        </>
     );
}
 
export default Home;