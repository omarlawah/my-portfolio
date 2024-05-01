import {Container, Row, Col} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



const Home = () => {
    
    const phrases = ["Welcome to my portfolio!", " I'm a web developer & a web designer.",];
    const [phrase, setPhrase] = useState();
    // // function to make the intro text change every 0.1 second
    // useEffect(() => {
    //         let phraseIndex = 0;
    //         let letterIndex = 0;
    //         const intervalId = setInterval(() => {
    //             if (letterIndex <= phrases[phraseIndex].length) {
    //                 setPhrase(phrases[phraseIndex].slice(0, letterIndex));
    //                     letterIndex++;
    //             } else {
    //                 letterIndex = 0;
    //                 phraseIndex = (phraseIndex + 1) % phrases.length;
    //             }
    //         }, 100); 
           
    //         return () => clearInterval(intervalId);

    // },[]);

   

    return (
        <>
        <div  className="home-container"> 
            <Container fluid className="home-content"> 
                <Row id='intro'>
                    <Col>
                        <p><span>{phrase}</span><br/>As a passionate web developer, I specialize 
                         in crafting engaging and functional web experiences. With a keen eye for design and a commitment
                          below to see how I can help elevate your online presence with clean code, I strive to bring ideas
                           to life through innovative solutions.
                           </p>
                    </Col>
                    <Row>
                        <Col>
                            <button  class="learn-more">
                                <Link  to='/Projects'>
                                <span class="circle" aria-hidden="true">
                                    <span class="icon arrow"></span>
                                    </span>
                                <span class="button-text">Explore</span>
                                </Link>
                            </button>
                        </Col>    
                        <Col>
                            <button class="fancy" >
                                <span class="top-key"></span>
                                <span class="text">Hire Me</span>
                                <span class="bottom-key-1"></span>
                            <span class="bottom-key-2"></span>
                            </button>
                        </Col>    
                    </Row>
                </Row>
            </Container>
        </div>
       
        </>
     );
}
 
export default Home;