// import React, { useEffect, useState } from 'react';
import { Button, Card, Container } from "react-bootstrap";
import "./About.css";

const About = () => {
  // const [teachers, setTeachers] = useState([])

  // useEffect(() => {
  //     fetch("./teacher.JSON")
  //         .then(res => res.json())
  //         .then(data => setTeachers(data))
  // }, [])
  return (
    <div className="about my-5">
      <Container>
        <div className="row">
          <div className="col-lg-6">
            <img
              src="https://cdn2.hometogo.net/medium/v1/73a/ba2/18bb416239972aef9172ca19fc.jpg"
              alt=""
            />
          </div>
          <div className="col-lg-6">
            <div classname="hello">
              <div>
                <h2>About Tourism Ministry</h2>
                <Card.Text className="text-muted">
                  The Ministry of Tourism envisions to become a benchmark for
                  sustainable tourism development - a nation with an
                  economically profitable tourism industry in harmony with its
                  natural environment, cultural resources, and the values of its
                  people. On behalf of the people of Maldives we promote and set
                  the best example of sustainable tourism development – a nation
                  with an economically profitable tourism industry in harmony
                  with its natural environment, cultural resources, and the
                  values of its people.
                </Card.Text>
                <Button variant="warning">Learn More</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="row py-5 text-center">
          <h2>Professional </h2>
          <p className=" px-5 text-muted">
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring which I enjoy with my whole heart.
          </p>
        </div>
        <div className="row"></div>
      </Container>
    </div>
  );
};

export default About;
