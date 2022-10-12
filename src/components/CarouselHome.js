import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Home from './Home';

const CarouselHome = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Container className='d-flex flex-column align-items-center'>
            <Carousel activeIndex={index} onSelect={handleSelect} className='w-75' variant='dark'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="slide1.jpeg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Welcome to Web Development Course Quizzes</h3>
                        <p>Here you can take quizzes to check your learning outcomes in your web development course.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="slide1.jpeg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Topics includes: React, JavaScript, CSS and Git </h3>
                        <p>There is a chart at the chart tab. It was created using ReChart. In the Blog page, There are 3 questions about react. Go Check them out.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Home></Home>
        </Container>
    );
};

export default CarouselHome;