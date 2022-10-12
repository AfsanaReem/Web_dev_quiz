import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Topic from './Topic';

const Home = () => {
    const topics = useLoaderData().data;
    return (
        <div>
            <Container className='mt-5'>
                <Row xs={1} md={2} lg={4} >
                    {
                        topics.map(topic => <Topic
                            key={topic.id}
                            topic={topic}
                        ></Topic>)
                    }
                </Row>
            </Container>
        </div >
    );
};

export default Home;