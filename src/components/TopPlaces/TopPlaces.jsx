import React from "react";
import { Card, Col } from "react-bootstrap";

const TopPlaces = (props) => {
  return (
    <div>
      <Col>
        <Card>
          <Card.Img variant="top" src={props.img} />
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default TopPlaces;
