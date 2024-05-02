import backGround from './assets/backGround.jpg'; 
import backGround3 from './assets/backGround3.jpg'; 
import { useState } from 'react';
import {Carousel, Container, Col, Row} from 'react-bootstrap'; 
import htmlicon from './assets/htmlicon.png';
import cssicon from './assets/cssicon.png';
import jsicon from './assets/jsicon.png';
import bootstrapicon from './assets/bootstrapicon.png';
import expressjsicon from './assets/expressjsicon.png';
import nodejsicon from './assets/nodejsicon.png';
import reactjsicon from './assets/reactjsicon.png';
import mongodbicon from './assets/mongodbicon.png';
import giticon from './assets/giticon.png';
import jsonicon from './assets/jsonicon.png';

const Services = () => {
    
    //to animate progress bars when scrolled to
    window.addEventListener('scroll',()=>{
            document.querySelectorAll('progress').forEach(element => {
            element.style.animationName="fillProgress";
        });
    })
    

     // hook to control the carousel 
     const [index, setIndex] = useState(0);
     const handleSelect = (selectedIndex) => {
         setIndex(selectedIndex);
     };
    return ( 
        <>
        <div className="carousel-wrapper">
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={backGround3} // Assuming you have imported or defined `backGround` variable
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>The <i>Designer</i></h3>
                        <p>Crafting seamless user experiences through code.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={backGround} // Assuming you have imported or defined `backGround` variable
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>The <i>Programmer</i></h3>
                        <p>Empowering businesses with cutting-edge web solutions.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
        <hr/>
        <Container className='info-container' fluid>
            <Row>
                <Col className='self-info' xs={12} md={8} xl={7}>
                    <h4>Educational journey</h4>
                    <div className='about-me'>My educational journey has been one of self-motivation and
                     continuous learning. Upon completing high school, I embarked on a path of self-teaching, 
                     diving into the world of full-stack development with an insatiable curiosity. Through countless
                      hours of online resources, tutorials, and hands-on projects, I honed my skills in web development, 
                      mastering both front-end and back-end technologies. Along the way, I attained a front-end development
                       certificate from Meta, affirming my proficiency in crafting compelling user interfaces and experiences. 
                       Despite my self-taught background, I recognize the value of formal education, which is why I am currently
                        pursuing a bachelor's degree in Information Technology at university. This dual approach—combining practical
                         experience with academic rigor—has equipped me with a holistic understanding of 
                    the field and a passion for innovation in the ever-evolving landscape of technology.</div>
                </Col>
                <Col xs={12} md={4} xl={5}>
                   <div className='skills-container'>
                        <h4>My Skills</h4>
                        <ul>
                            <li className='skill'>
                                <span><img alt='' src={htmlicon} /></span>
                                <div>
                                    <div className='skill-label'>
                                        <span>HTML</span>
                                        <span>95%</span>
                                    </div>
                                    <div className='skill-level'>
                                        <progress  value={95} max={100}></progress>
                                    </div>
                                </div>
                            </li>
                            <li className='skill'>
                                <span><img alt='' src={cssicon}/></span>
                                <div>
                                    <div className='skill-label'>
                                        <span>CSS</span>
                                        <span>80%</span>
                                    </div>
                                    <div className='skill-level'>
                                        <progress value={80} max={100}></progress>
                                    </div>
                                </div>
                            </li>
                            <li className='skill'>
                                <span><img alt='' src={jsicon}/></span>
                                <div>
                                    <div className='skill-label'>
                                        <span>JavaScript</span>
                                        <span>75%</span>
                                    </div>
                                    <div className='skill-level'>
                                        <progress value={75} max={100}></progress>
                                    </div>
                                </div>
                            </li>
                            <li className='skill'>
                                <span><img alt='' src={bootstrapicon}/></span>
                                <div>
                                    <div className='skill-label'>
                                        <span>BootStrap</span>
                                        <span>80%</span>
                                    </div>
                                    <div className='skill-level'>
                                        <progress value={80} max={100}></progress>
                                    </div>
                                </div>
                            </li>
                            <li className='skill'>
                                <span><img alt='' src={expressjsicon}/></span>
                                <div>
                                    <div className='skill-label'>
                                        <span>Express.js</span>
                                        <span>65%</span>
                                    </div>
                                    <div className='skill-level'>
                                        <progress value={65} max={100}></progress>
                                    </div>
                                </div>
                            </li>
                            <li className='skill'>
                                <span><img alt='' src={nodejsicon}/></span>
                                <div>
                                    <div className='skill-label'>
                                        <span>Node.js</span>
                                        <span>60%</span>
                                    </div>
                                    <div className='skill-level'>
                                        <progress value={60} max={100}></progress>
                                    </div>
                                </div>
                            </li>
                            <li className='skill'>
                                <span><img alt='' src={reactjsicon}/></span>
                                <div>
                                    <div className='skill-label'>
                                        <span>React.js</span>
                                        <span>70%</span>
                                    </div>
                                    <div className='skill-level'>
                                        <progress value={70}  max={100}></progress>
                                    </div>
                                </div>
                            </li>
                            <li className='skill'>
                                <span><img alt='' src={jsonicon}/></span>
                                <div>
                                    <div className='skill-label'>
                                        <span>JSON</span>
                                        <span>90%</span>
                                    </div>
                                    <div className='skill-level'>
                                        <progress value={90} max={100}></progress>
                                    </div>
                                </div>
                            </li>
                            <li className='skill'>
                                <span><img alt='' src={mongodbicon}/></span>
                                <div>
                                    <div className='skill-label'>
                                        <span>mongoDB</span>
                                        <span>65%</span>
                                    </div>
                                    <div className='skill-level'>
                                        <progress value={65} max={100}></progress>
                                    </div>
                                </div>
                            </li>
                            <li className='skill'>
                                <span><img alt='' src={giticon}/></span>
                                <div>
                                    <div className='skill-label'>
                                        <span>Git</span>
                                        <span>55%</span>
                                    </div>
                                    <div className='skill-level'>
                                        <progress value={55} max={100}></progress>
                                    </div>
                                </div>
                            </li>
                        </ul>
                   </div>
                </Col>
            </Row>
        </Container>
        </>
     );
}
 
export default Services;