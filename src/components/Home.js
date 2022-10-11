import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Topic from './Topic';

const Home = () => {
    const topics = useLoaderData().data;
    return (
        <div>
            <Container>
                <Row xs={1} md={2} lg={4} className=" " >
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