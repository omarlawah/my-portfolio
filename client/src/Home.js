import {Container, Row, Col} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { Link} from 'react-router-dom';


const Home = () => {
    
    

    // function to make the intro text change every 0.1 second
    const phrases = [" I'm a web developer & a web designer."];
    const [phrase, setPhrase] = useState();

    useEffect(() => {
            let letterIndex = 0;
            const intervalId = setInterval(() => {
                setPhrase(phrases[0].slice(0, letterIndex));
                letterIndex++;
            }, 100); 
           
            return () => clearInterval(intervalId);

    },[]);

 

    return (
        <>
        <div  className="home-container"> 
            <Container fluid className="home-content"> 
                <Row id='intro'>
                    <Col>
                        <p><span>Welcome to my portfolio!</span><br/><span>{phrase}</span><br/>As a passionate web developer, I specialize 
                         in crafting engaging and functional web experiences. With a keen eye for design and a commitment
                          below to see how I can help elevate your online presence with clean code, I strive to bring ideas
                           to life through innovative solutions.
                           </p>
                    </Col>
                    <Row>
                        <Col className='learn-more-col'>
                            <button  className="learn-more">
                                <Link  to='/Projects'>
                                <span className="circle" aria-hidden="true">
                                    <span className="icon arrow"></span>
                                    </span>
                                <span className="button-text">Explore</span>
                                </Link>
                            </button>
                        </Col>    
                        <Col>
                                <button  className="fancy">
                                    <span className="top-key"></span>
                                    <span className="text">
                                        <a href={`mailto:Omarxxxxx135@gmail.com`}>Hire Me</a>
                                        </span>
                                    <span className="bottom-key-1"></span>
                                    <span className="bottom-key-2"></span>
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