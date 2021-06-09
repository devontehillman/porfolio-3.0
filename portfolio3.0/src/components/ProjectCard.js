import React from "react";
//import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
//import Button from "react-bootstrap/Button";

function ProjectCard(props) {
    console.log(props)
    return (
        <Col md={4}>
            <Card style={{boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",marginBottom:"1.5em",}}>
                <Card.Header style={{display:"flex",justifyContent:"center"}}>{props.title}</Card.Header>
                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                <a href="">
                <h3>Learn More</h3>
                </a>
                {/* <a href={props.livePage}>
                <h3>Deployed Page</h3>
                </a>
                <Card.Text>
                {props.description}
                </Card.Text>
                <a href={props.gitRepo}>
                <h3>Git Repo</h3>
                </a> */}
                </Card.Body>
            </Card>
        </Col>
    );
}

export default ProjectCard;