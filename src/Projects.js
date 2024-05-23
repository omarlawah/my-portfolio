import { Container,Card, Row, Col} from 'react-bootstrap';
import etchasketchicon from './assets/etchasketchicon.png';
import rockpaperscissorsicon from './assets/rockpaperscissorsicon.png';
import todoappicon from './assets/todoappicon.png';
import passwordgeneratoricon from './assets/passwordgeneratoricon.png';
import landingpageicon from './assets/landingpageicon.png';

const Projects = () => {

    return (    
        <>
            <Container className='projects' fluid>
                <Row>
                    <h1 className='projects-header'>Some of the projects that i have created</h1>
                </Row>
                <Row fluid className='odd-row'>
                    <Col className='project-info' xs={12} md={6} xl={3} >
                        <Card>
                            <div  className="card">
                                <Card.Img className='project-img' alt='' src={etchasketchicon} />
                                <Card.Title>
                                    <a className='project-link' href='https://github.com/omarlawah/Etch-a-Sketch'>
                                        Etch-A-Sketch
                                    </a>
                                </Card.Title>
                            </div>
                        </Card>
                    </Col>
                    <Col  className='project-description' xs={12} md={6} xl={9}>
                        <p>
                        Experience the nostalgia of the classic Etch-a-Sketch brought into 
                        the digital age with my first JavaScript project. Using HTML, CSS, and 
                        JavaScript, I created a dynamic and interactive Etch-a-Sketch game that allows users 
                        to unleash their creativity on a virtual canvas. With intuitive controls and smooth drawing 
                        capabilities, users can sketch anything from simple doodles to intricate designs. 
                        </p><br/>
                        <div className="button-borders">
                            <a className='primary-button' href='https://omarlawah.github.io/Etch-a-Sketch/'>View</a>
                        </div>
                    </Col>
                </Row>
                <Row fluid className='even-row'>
                    <Col className='project-description' xs={12} md={6} xl={9}>
                        <p>
                        Using HTML, CSS, and JavaScript, I developed an interactive game where players can 
                        test their luck and strategy against the computer. The game features a sleek user interface and smooth
                         animations that enhance the gaming experience. Players simply choose their 
                        weapon of choice - rock, paper, or scissors - and watch as the computer reveals its selection.
                        </p><br/>
                        <div className="button-borders">
                            <a className='primary-button' href='https://omarlawah.github.io/first-js-game/'>View</a>
                        </div>
                    </Col>
                    <Col className='project-info'  xs={12} md={6} xl={3}  >
                        <Card>
                            <div className="card">
                                <Card.Img className='project-img' alt='' src={rockpaperscissorsicon} />
                                <Card.Title>
                                    <a className='project-link' href='https://github.com/omarlawah/first-js-game'>
                                        Rock-Paper-Scissor
                                    </a>
                                </Card.Title>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <Row fluid className='odd-row'>
                    <Col className='project-info' xs={12} md={6} xl={3} >
                        <Card>
                            <div className="card">
                                <Card.Img className='project-img' alt='' src={todoappicon} />
                                <Card.Title>
                                    <a className='project-link' href='https://github.com/omarlawah/react-todo-app'>
                                        React-Todo-App
                                    </a>
                                </Card.Title>
                            </div>
                        </Card>
                    </Col>
                    <Col  className='project-description' xs={12} md={6} xl={9}>
                        <p>
                        Whether you're a student, professional, or busy parent, my React To-Do App
                         is your ultimate companion for staying organized and achieving your goals. This app
                          offers a seamless and intuitive user experience, allowing users to create and delete tasks with ease
                          Leveraging state management and component-based architecture, this project showcases my proficiency 
                          in React development.
                        </p><br/>
                        <div className="button-borders">
                            <a className='primary-button' href='https://omarlawah.github.io/react-todo-app/'>View</a>
                        </div>
                    </Col>
                </Row>
                <Row fluid className='even-row'>
                    <Col className='project-description' xs={12} md={6} xl={9}>
                        <p>
                        Introducing my streamlined Password Generator! Crafted with simplicity
                         in mind, this tool seamlessly integrates into registration forms. With just a click,
                           users can generate robust passwords, ensuring their accounts remain secure. Designed for efficiency
                            and ease of use, my Password Generator prioritizes 
                        functionality above all else, providing a hassle-free solution to password creation.
                        </p><br/>
                        <div className="button-borders">
                            <a className='primary-button' href='https://omarlawah.github.io/password-generator/'>View</a>
                        </div>
                    </Col>
                    <Col className='project-info'  xs={12} md={6} xl={3}  >
                        <Card>
                            <div className="card">
                                <Card.Img className='project-img' alt='' src={passwordgeneratoricon} />
                                <Card.Title>
                                    <a className='project-link' href='https://github.com/omarlawah/password-generator'>
                                        Password generator
                                    </a>
                                </Card.Title>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <Row fluid className='odd-row'>
                    <Col className='project-info' xs={12} md={6} xl={3} >
                        <Card>
                            <div className="card">
                                <Card.Img className='project-img' alt='' src={landingpageicon} />
                                <Card.Title>
                                    <a className='project-link' href='https://github.com/omarlawah/Login-Page'>
                                        Landing-page
                                    </a>
                                </Card.Title>
                            </div>
                        </Card>
                    </Col>
                    <Col  className='project-description' xs={12} md={6} xl={9}>
                        <p>
                        Immerse yourself in a seamless user experience, where every detail 
                        is carefully crafted to delight. One standout feature is the password validation, powered
                         by JavaScript, ensuring your security without compromising convenience. Join me on this
                         journey of innovation as we redefine what it means to create engaging web experiences.
                        </p><br/>
                        <div className="button-borders">
                            <a className='primary-button' href='https://omarlawah.github.io/Login-Page/'>View</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
     );
}
 
export default Projects;