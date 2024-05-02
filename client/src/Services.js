import backGround from './assets/backGround.jpg'; 
import {Carousel} from 'react-bootstrap'; 
import { useState } from 'react';



const Services = () => {
     // hook to control the carousel 
     const [index, setIndex] = useState(0);
     const handleSelect = (selectedIndex) => {
         setIndex(selectedIndex);
     };
    return ( 
        <>
        <Carousel  activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                {/* Placeholder content for the first slide */}
                <img
                className="d-block  w-100"
                src={backGround}
                alt="First slide"
                />
                <Carousel.Caption>
                    <h3>The<i> Designer</i></h3>
                    <p>Crafting seamless user experiences through code.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                {/* Placeholder content for the third slide */}
                <img
                className="d-block w-100"
                src={backGround}
                alt="second slide"
                />
                <Carousel.Caption>
                    <h3>The <i>Programmer</i></h3>
                    <p>Empowering businesses with cutting-edge web solutions.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </>
     );
}
 
export default Services;