import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
    const { id, name, logo, total } = topic;
    return (
        <Col className="g-4 d-flex justify-content-center">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`${logo}`} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Total Quiz : {total}
                    </Card.Text>
                    <Button variant="secondary">
                        <Link to={`/quiz/${id}`} style={{ textDecoration: 'none', color: 'white' }}>Take the quiz</Link>
                    </Button>
                </Card.Body>
            </Card>
        </Col >
    );
};

export default Topic;