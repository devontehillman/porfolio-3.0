import React from "react";
//import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
//import Button from "react-bootstrap/Button";

function ProjectCard(props) {
    console.log(props)
    return (
        <Col md={4}>
            <Card>
                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                <a href={props.livePage}>
                <Card.Title>{props.title}</Card.Title>
                </a>
                <Card.Text>
                {props.description}
                </Card.Text>
                <a href={props.gitRepo}>Git Repo</a>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default ProjectCard;